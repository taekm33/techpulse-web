const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'
const BASE_URL = LOCALE === 'kr' ? 'https://techpulse.co.kr' : 'https://technologypulse.app'

export function canonicalUrl(pathname = '/'): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${BASE_URL}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`
}

/** Site-owned share card (public/og-<locale>.png, 1200x630) used for og:image / twitter:image. */
export const OG_IMAGE = {
  url: `${BASE_URL}/og-${LOCALE}.png`,
  width: 1200,
  height: 630,
  alt: LOCALE === 'kr' ? 'TechPulse — AI·IT 기술의 변화와 배경을 한국어로' : 'TechPulse — AI & tech news with context',
}

const SITE: Record<'kr' | 'en', string> = { kr: 'https://techpulse.co.kr', en: 'https://technologypulse.app' }

/** hreflang map for a page that exists (non-draft) in the given locales. */
export function languageAlternates(pathname: string, locales: Array<'kr' | 'en'>): Record<string, string> {
  const path = pathname === '/' ? '/' : `/${pathname.replace(/^\/|\/$/g, '')}/`
  const out: Record<string, string> = {}
  for (const l of locales) out[l === 'kr' ? 'ko' : 'en'] = `${SITE[l]}${path}`
  return out
}
