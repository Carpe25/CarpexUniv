import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { analyticsEnabled, grantConsent, denyConsent } from '../lib/analytics'

const STORAGE_KEY = 'ud-consent'

// Cookie-consent banner using Google Consent Mode v2. Until the visitor
// chooses, GA runs in cookieless mode (anonymous, modeled) — so we still get
// meaningful analytics without dropping a cookie. "Accept" upgrades to full
// granular tracking; "Decline" keeps the cookieless mode.
const ConsentBanner = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!analyticsEnabled) return
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'granted') grantConsent()
        else if (stored === 'denied') denyConsent()
        else setVisible(true)
    }, [])

    const choose = (granted: boolean) => {
        localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
        if (granted) grantConsent()
        else denyConsent()
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-4">
                <p className="max-w-2xl text-xs leading-[1.7] text-neutral-600 sm:text-[13px]">
                    We use cookies to understand how visitors use our site and to
                    improve your experience. See our{' '}
                    <Link to="/privacy" className="underline underline-offset-2 hover:text-neutral-950">
                        Privacy Policy
                    </Link>
                    .
                </p>
                <div className="flex shrink-0 gap-3">
                    <button
                        onClick={() => choose(false)}
                        className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950"
                    >
                        Decline
                    </button>
                    <button
                        onClick={() => choose(true)}
                        className="rounded-full bg-neutral-950 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-neutral-800"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConsentBanner
