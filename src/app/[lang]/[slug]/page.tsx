import { notFound } from 'next/navigation'
import { LocalePageProps, Language } from "@/app/types/locales";
import { SectionType, ImageTextAdjacentType } from '@/app/types/sections';

import ImageTextAdjacent from '@/app/components/sections/image-text-adjacent'

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
        page?.sections.length > 0 && (
          <div className="mt-10">
            Custom sections
          </div>
        )
      }
      {page?.sections.map((section: SectionType, index: number) => (
        <div key={section.id + index}>
          {section.id === 'image-text-adjacent' && <ImageTextAdjacent key={section.id} data={section as ImageTextAdjacentType} />}
        </div>
      ))}
    </div>
  )
}