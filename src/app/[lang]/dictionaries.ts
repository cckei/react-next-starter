import 'server-only'
import { Language } from '@/app/types/locales'
 
const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  tc: () => import('../dictionaries/tc.json').then((module) => module.default),
  sc: () => import('../dictionaries/sc.json').then((module) => module.default)
}

// fallback to en if locale is not found
export const getDictionary = async (locale: Language) => {
  if(!dictionaries[locale]) {
    return dictionaries.en();
  } 
  
  return dictionaries[locale]();
}