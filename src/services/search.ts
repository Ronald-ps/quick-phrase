import type { Translation } from '@/data.dev'

export const getSubstrings = (text: string): string[][] => {
  text = text.replace(/\s/g, '')
  const substrings: string[][] = []
  substrings.push([text[0]])
  text = text.slice(1)
  for (let i = 0; i < text.length; i++) {
    const substringsLastIndex = substrings.length - 1
    substrings.push([])
    for (let j = substringsLastIndex; j >= 0; j--) {
      const currentSubstrings = substrings[j]
      substrings[j + 1].push(currentSubstrings[currentSubstrings.length - 1] + text[i])
    }

    substrings[0].push(text[i])
  }
  return substrings
}

export const searchTranslations = (params: {
  text: string
  translations: Translation[]
  maxLayer?: number
}) => {
  const substrings = getSubstrings(params.text)
  let filteredTranslations = [] as Translation[]

  let layer = 0
  for (let i = substrings.length - 1; i >= 0; i--) {
    layer++
    if (params.maxLayer && layer > params.maxLayer) {
      break
    }

    const substrings_ = substrings[i]
    const translations_ = searchSubstrings(substrings_, params.translations)

    if (translations_.length > 0) {
      filteredTranslations = mergeTranslations(filteredTranslations, params.translations)
    }
  }

  return filteredTranslations
}

export const searchSubstrings = (substrings: string[], translations: Translation[]) => {
  return translations.filter((translation) => {
    return substrings.some((substring) => {
      return (
        translation.text.toLowerCase().includes(substring) ||
        translation.translatedText.toLowerCase().includes(substring)
      )
    })
  })
}

export const mergeTranslations = (translations1: Translation[], translations2: Translation[]) => {
  return translations2.reduce((acc, translation) => {
    if (!acc.some((t) => t.id === translation.id)) {
      acc.push(translation)
    }
    return acc
  }, translations1)
}
