import { useState } from 'react'
import { CONTACT } from '../site'
import { Button, Icon } from './ui'

// No form backend existed in the old site. Set VITE_FORM_ENDPOINT (Formspree, Basin, own API...) in .env;
// it receives POST JSON: { form, ...fields }. Without it the form says so instead of pretending to send.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const input =
  'w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-base text-charcoal placeholder:text-slate outline-none transition-colors focus:border-charcoal aria-invalid:border-2 aria-invalid:border-charcoal'

/**
 * fields: [{ name, label, type?: text|email|tel|textarea|select|chips|checkbox, required?, options?, placeholder?, half? }]
 * Validation = browser constraints (required/type/pattern) + "pick at least one" for required chip groups.
 */
export function validate(form, fields) {
  const errors = {}
  for (const f of fields) {
    if (f.type === 'chips') {
      if (f.required && !form.querySelector(`input[name="${f.name}"]:checked`)) errors[f.name] = 'Please choose at least one option.'
      continue
    }
    const el = form.elements[f.name]
    if (el && !el.checkValidity()) {
      errors[f.name] = el.validity.valueMissing
        ? f.type === 'checkbox' ? 'Please confirm to continue.'
          : f.type === 'select' ? 'Please choose an option.'
          : `Please enter ${f.label.toLowerCase()}.`
        : el.validity.typeMismatch && f.type === 'email' ? 'Please enter a valid email address.'
        : el.validity.patternMismatch && f.type === 'tel' ? 'Please enter a valid phone number.'
        : el.validationMessage
    }
  }
  return errors
}

function Field({ f, error }) {
  const id = `f-${f.name}`
  const a11y = { id, name: f.name, required: f.required, 'aria-invalid': !!error || undefined, 'aria-describedby': error ? `${id}-err` : undefined }
  const label = (
    <>
      {f.label}
      {f.required ? <span aria-hidden="true"> *</span> : <span className="font-medium text-slate"> (optional)</span>}
    </>
  )
  let control
  if (f.type === 'chips')
    control = (
      <fieldset aria-describedby={a11y['aria-describedby']} aria-invalid={a11y['aria-invalid']}>
        <legend className="mb-3 text-sm font-bold">{label}</legend>
        <div className="flex flex-wrap gap-2">
          {f.options.map((o) => (
            <label key={o} className="cursor-pointer">
              <input type="checkbox" name={f.name} value={o} className="peer sr-only" />
              <span className="inline-block rounded-full border border-charcoal/15 bg-white px-4 py-2 text-sm transition-colors peer-checked:border-charcoal peer-checked:bg-charcoal peer-checked:text-ivory peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold">
                {o}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
    )
  else if (f.type === 'checkbox')
    control = (
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm leading-5">
        <input type="checkbox" value="yes" className="mt-0.5 size-4 shrink-0 accent-charcoal" {...a11y} />
        <span>{f.label}</span>
      </label>
    )
  else
    control = (
      <>
        <label htmlFor={id} className="mb-2 block text-sm font-bold">{label}</label>
        {f.type === 'textarea' ? (
          <textarea rows={5} placeholder={f.placeholder} className={input} {...a11y} />
        ) : f.type === 'select' ? (
          <select defaultValue="" className={input} {...a11y}>
            <option value="" disabled>Select…</option>
            {f.options.map((o) => <option key={o}>{o}</option>)}
          </select>
        ) : (
          <input
            type={f.type ?? 'text'}
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            pattern={f.type === 'tel' ? '[0-9 \\(\\)\\+\\.\\-]{7,20}' : undefined /* `pattern` compiles with the v flag: escape ( ) + . - */}
            className={input}
            {...a11y}
          />
        )}
      </>
    )
  return (
    <div className={f.half ? 'sm:col-span-1' : 'sm:col-span-2'}>
      {control}
      {error && (
        <p id={`${id}-err`} className="mt-2 flex items-center gap-1.5 text-sm font-bold">
          <Icon name="alert" className="size-4" /> {error}
        </p>
      )}
    </div>
  )
}

export default function Form({ name, fields, submitLabel = 'Submit', successTitle = 'Thank you.', successText }) {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const errs = validate(form, fields)
    setErrors(errs)
    const first = Object.keys(errs)[0]
    if (first) return form.querySelector(`[name="${first}"]`)?.focus()

    const data = new FormData(form)
    if (data.get('website')) return setStatus('sent') // honeypot filled: bot, drop silently
    data.delete('website')
    const body = { form: name }
    for (const k of new Set(data.keys())) {
      const v = data.getAll(k)
      body[k] = fields.find((f) => f.name === k)?.type === 'chips' ? v : v[0]
    }
    if (!ENDPOINT) return setStatus('error')
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) })
      if (!res.ok) throw new Error(res.status)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent')
    return (
      <div role="status" className="py-10 text-center">
        <span className="mx-auto mb-5 grid size-12 place-items-center rounded-full bg-charcoal text-gold"><Icon name="check" /></span>
        <h3 className="text-2xl font-bold">{successTitle}</h3>
        <p className="mx-auto mt-2 max-w-sm text-slate">{successText}</p>
      </div>
    )

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => <Field key={f.name} f={f} error={errors[f.name]} />)}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="sm:col-span-2">
        <Button type="submit" variant="dark" disabled={status === 'sending'} className="disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : submitLabel}
        </Button>
        {status === 'error' && (
          <p role="alert" className="mt-4 flex items-start gap-2 text-sm font-bold">
            <Icon name="alert" className="mt-0.5 size-4 shrink-0" />
            {ENDPOINT
              ? `Something went wrong sending your message. Please try again or email ${CONTACT.email}.`
              : `Online submissions aren't connected yet. Please email ${CONTACT.email}.`}
          </p>
        )}
      </div>
    </form>
  )
}
