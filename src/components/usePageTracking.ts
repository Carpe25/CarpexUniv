import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../lib/analytics'

// Fires a GA4 page_view on every client-side route change. Without this, an
// SPA only ever reports the first page the visitor lands on.
export function usePageTracking(): void {
    const location = useLocation()

    useEffect(() => {
        trackPageView(location.pathname + location.search)
    }, [location.pathname, location.search])
}
