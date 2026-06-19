// Google Analytics 4 + Consent Mode v2
//
// The Measurement ID is read from VITE_GA_ID (see .env.local). If it is not
// set, every function here is a no-op, so local/dev builds stay clean.
//
// Consent Mode v2 is initialised with everything DENIED by default but with
// url_passthrough + ads_data_redaction on. That means GA still sends
// anonymous, cookieless pings before the visitor accepts — Google uses those
// to model the gap — so you don't lose meaningful analytics while staying
// compliant. When the visitor accepts, we upgrade consent to granted and the
// full, cookie-based data flows.

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined

type GtagArgs =
    | ['js', Date]
    | ['config', string, Record<string, unknown>?]
    | ['event', string, Record<string, unknown>?]
    | ['set', string, unknown]
    | ['consent', 'default' | 'update', Record<string, unknown>]

declare global {
    interface Window {
        dataLayer: unknown[]
        gtag: (...args: GtagArgs) => void
    }
}

export const analyticsEnabled = Boolean(GA_ID)

let initialised = false

/** Inject the gtag script and set Consent Mode defaults. Call once on boot. */
export function initAnalytics(): void {
    if (!GA_ID || initialised || typeof window === 'undefined') return
    initialised = true

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments)
    }

    // Consent defaults MUST be set before the config command.
    window.gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
    })
    // Keeps measurement working in cookieless mode until consent is granted.
    window.gtag('set', 'url_passthrough', true)
    window.gtag('set', 'ads_data_redaction', true)

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    window.gtag('js', new Date())
    // send_page_view:false — we fire page_view manually on each route change.
    window.gtag('config', GA_ID, { send_page_view: false })
}

/** Upgrade consent once the visitor accepts the banner. */
export function grantConsent(): void {
    if (!GA_ID) return
    window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
    })
}

/** Record that the visitor explicitly declined (keeps cookieless mode). */
export function denyConsent(): void {
    if (!GA_ID) return
    window.gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
    })
}

/** Fire a page_view. Call on every client-side route change. */
export function trackPageView(path: string): void {
    if (!GA_ID) return
    window.gtag('event', 'page_view', {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
    })
}

/** Fire a custom event (conversions, CTA clicks, etc.). */
export function trackEvent(
    name: string,
    params: Record<string, unknown> = {},
): void {
    if (!GA_ID) return
    window.gtag('event', name, params)
}
