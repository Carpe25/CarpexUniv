import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import {
    containerClass,
    sectionClass,
    heroHeadingClass,
    eyebrowClass,
    // bodyClass,
    subheadingClass,
} from '../styles'

const contactDetails = [
    {
        Icon: MapPin,
        label: 'Headquarters',
        value: '717 Liberty Avenue, Suite 207 Pittsburgh, PA 15222',
    },
    {
        Icon: Mail,
        label: 'Email',
        value: 'hello@univdiam.com',
        href: 'mailto:hello@univdiam.com',
    },
    {
        Icon: Phone,
        label: 'Phone',
        value: '+1 (412) 391-9650',
        href: 'tel:+14123919650',
    },
]

const fieldClass =
    'w-full border-b border-neutral-300 bg-transparent py-3 text-sm text-neutral-950 transition-colors placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none'
const labelClass =
    'text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500'

// Paste the Web app URL you get after deploying the Google Apps Script.
const FORM_ENDPOINT =
    'https://script.google.com/macros/s/AKfycbzDIZrcZO04hDswUzN3EQ-vuUo9XgrlHF97nmcXMxkgWJ6bkhqKqbF0bKKN2A8DjCw/exec'

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitting(true)
        setError(false)

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            await fetch(FORM_ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({
                    name: formData.get('name'),
                    company: formData.get('company'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                }),
            })
            setSubmitted(true)
        } catch {
            setError(true)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen bg-white text-neutral-950">
            <section className="relative h-[440px] min-h-[440px] overflow-hidden bg-neutral-950 sm:h-[540px] lg:h-[560px]">
                <img
                    src="/Contact-hero.png"
                    alt="Jewelry design sketches with pencils and ring drawings"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-950/40" />

                <div className={`${containerClass} relative z-10 flex h-full items-center`}>
                    <h1 className={`${heroHeadingClass} max-w-[640px] text-white`}>
                        Get <br />
                        in touch.
                    </h1>
                </div>
            </section>

            <section className={`bg-white ${sectionClass}`}>
                <div className={`${containerClass} grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
                    <div className="max-w-md">
                        <p className={`${eyebrowClass} mb-4`}>Contact</p>
                        <h2 className={subheadingClass}>Let's build something together.</h2>
                        {/* <p className={`mt-6 ${bodyClass}`}>
                            Whether you're scaling a retail brand or commissioning a bespoke
                            piece, our partnerships team will get back to you within one
                            business day.
                        </p> */}

                        <ul className="mt-10 flex flex-col gap-7">
                            {contactDetails.map(({ Icon, label, value, href }) => (
                                <li key={label} className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-50 transition-colors duration-300 hover:bg-neutral-100/80">
                                        <Icon className="h-5 w-5 text-neutral-800 stroke-[1.5] transition-transform duration-300 hover:scale-105" />
                                    </div>
                                    <div>
                                        <p className={labelClass}>{label}</p>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="mt-1 block text-sm text-neutral-700 transition-colors hover:text-neutral-950 sm:text-base"
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="mt-1 text-sm text-neutral-700 sm:text-base">
                                                {value}
                                            </p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-mist p-7 sm:p-10 lg:p-12">
                        {submitted ? (
                            <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 text-center">
                                <h3 className="text-2xl font-semibold tracking-[-0.01em] text-neutral-950">
                                    Message received.
                                </h3>
                                <p className="max-w-sm text-sm leading-[1.7] text-neutral-600">
                                    Thank you for reaching out to Univ Diam. A member of our
                                    partnerships team will be in touch within one business day.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className={labelClass}>
                                            Full Name
                                        </label>
                                        <input id="name" name="name" type="text" required placeholder="Jane Doe" className={fieldClass} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="company" className={labelClass}>
                                            Company
                                        </label>
                                        <input id="company" name="company" type="text" placeholder="Retailer name" className={fieldClass} />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className={labelClass}>
                                        Email Address
                                    </label>
                                    <input id="email" name="email" type="email" required placeholder="partner@retailer.com" className={fieldClass} />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className={labelClass}>
                                        How can we help?
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell us about your project or Inquiry.."
                                        className={`${fieldClass} resize-none`}
                                    />
                                </div>

                                {error && (
                                    <p className="text-sm text-red-600">
                                        Something went wrong. Please try again or email us directly.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="mt-1 w-full rounded-full bg-neutral-950 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {submitting ? 'Sending…' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact
