interface LocalePageProps {
  params: Promise<{ 
    lang: string 
    slug: string
  }>
}

type Language = 'en' | 'tc' | 'sc'

export type { Language, LocalePageProps }