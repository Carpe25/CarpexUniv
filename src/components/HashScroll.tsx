import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HashScroll = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const targetId = hash.slice(1)
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }, [hash, pathname])

  return null
}

export default HashScroll
