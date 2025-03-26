import type { Category, Translation } from './data.dev'
import { translations } from './data.dev'
import {
  getSubstrings,
  mergeTranslations,
  searchSubstrings,
  searchTranslations,
} from './services/search'

const getTranslations = (categories: Category[], text: string): Translation[] => {
  const translationsByCategories = translations.filter((translation) => {
    return translation.categories.some((category) => categories.includes(category))
  })

  if (translationsByCategories.length === 0) {
    translationsByCategories.push(...translations)
  }

  const words = text.split(' ').map((word) => word.toLowerCase().trim())
  const targetTranslations = searchSubstrings(words, translationsByCategories)

  if (targetTranslations.length > 1) {
    return targetTranslations
  }

  const replacedText = text.replace(/\s/g, '')
  if (replacedText.length > 3) {
    const maxLayer = replacedText.length - 3
    const traslations_ = searchTranslations({
      text: replacedText,
      translations: translationsByCategories,
      maxLayer,
    })
    const mergedTranslations = mergeTranslations(targetTranslations, traslations_)
    if (mergedTranslations.length > 1) {
      return mergedTranslations
    }
  }

  if (replacedText.length > 3) {
    const maxLayer = replacedText.length - 3
    const traslations_ = searchTranslations({
      text: replacedText,
      translations: translations,
      maxLayer,
    })
    const mergedTranslations = mergeTranslations(targetTranslations, traslations_)
    if (mergedTranslations.length > 1) {
      return mergedTranslations
    }
  }

  let offLayerTranslations = searchTranslations({
    text: replacedText,
    translations: translationsByCategories,
  })
  if (mergeTranslations(targetTranslations, offLayerTranslations).length > 1) {
    return offLayerTranslations
  }

  offLayerTranslations = searchTranslations({
    text: replacedText,
    translations: translations,
  })
  if (mergeTranslations(targetTranslations, offLayerTranslations).length > 1) {
    return offLayerTranslations
  }

  return translationsByCategories
}
