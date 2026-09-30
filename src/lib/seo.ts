const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'
const BASE_URL = LOCALE === 'kr' ? 'https://techpulse.co.kr' : 'https://technologypulse.app'

export function canonicalUrl(pathname = '/'): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${BASE_URL}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`
}

const SITE: Record<'kr' | 'en', string> = { kr: 'https://techpulse.co.kr', en: 'https://technologypulse.app' }

/** hreflang map for a page that exists (non-draft) in the given locales. */
export function languageAlternates(pathname: string, locales: Array<'kr' | 'en'>): Record<string, string> {
  const path = pathname === '/' ? '/' : `/${pathname.replace(/^\/|\/$/g, '')}/`
  const out: Record<string, string> = {}
  for (const l of locales) out[l === 'kr' ? 'ko' : 'en'] = `${SITE[l]}${path}`
  return out
}
