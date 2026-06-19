import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { analyticsEnabled, grantAll, grantEssential } from '../lib/analytics'

const STORAGE_KEY = 'ud-consent'

type Choice = 'all' | 'essential'

// Cookie-consent banner using Google Consent Mode v2.
//   "Accept all"          -> full analytics + advertising/remarketing signals.
//   "Reject non-essential"-> basic analytics only (pages, time, approximate
//                            location, traffic source); no ad personalization.
// Until the visitor chooses, GA runs in cookieless mode so we still get
// anonymous, modeled analytics without dropping a cookie.
const ConsentBanner = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!analyticsEnabled) return
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'all') grantAll()
        else if (stored === 'essential') grantEssential()
        else setVisible(true)
    }, [])

    const choose = (choice: Choice) => {
        localStorage.setItem(STORAGE_KEY, choice)
        if (choice === 'all') grantAll()
        else grantEssential()
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-4">
                <p className="max-w-2xl text-xs leading-[1.7] text-neutral-600 sm:text-[13px]">
                    We use cookies to understand how visitors use our site and to
                    improve your experience. You can accept all cookies or keep only
                    the essentials. See our{' '}
                    <Link to="/privacy" className="underline underline-offset-2 hover:text-neutral-950">
                        Privacy Policy
                    </Link>
                    .
                </p>
                <div className="flex shrink-0 gap-3">
                    <button
                        onClick={() => choose('essential')}
                        className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950"
                    >
                        Reject non-essential
                    </button>
                    <button
                        onClick={() => choose('all')}
                        className="rounded-full bg-neutral-950 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-neutral-800"
                    >
                        Accept all
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConsentBanner
