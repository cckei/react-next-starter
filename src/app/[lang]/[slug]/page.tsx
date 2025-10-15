import { notFound } from 'next/navigation'
import { LocalePageProps, Language } from "@/app/types/locales";
import Sections from './sections'

// You now have access to the current locale
// e.g. /en-US/products -> `lang` is "en-US"

export default async function Page({ params }: LocalePageProps) {
  const { lang, slug } = await params

  const res = await fetch(`http://localhost:3000/api/pages/?page=${slug}`, {
    cache: 'no-store',
  })  
  const data = await res.json()
  const page = data

  if(!page){
    notFound()
  }
  
  return (
    <div>
      <div>This is {page?.name} page</div>

      {
        <Sections sections={page?.sections} />
      }
    </div>
  )
}