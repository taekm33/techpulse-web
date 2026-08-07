const LOCALE = (process.env.NEXT_PUBLIC_LOCALE as 'kr' | 'en') || 'kr'
const BASE_URL = LOCALE === 'kr' ? 'https://techpulse.co.kr' : 'https://technologypulse.app'

export function canonicalUrl(pathname = '/'): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${BASE_URL}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`
}
