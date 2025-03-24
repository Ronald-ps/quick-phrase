enum Category {
  QUESTIONS = 'questions',
  GREETINGS = 'greetings',
  DAY_TO_DAY = 'day-to-day',
  WORK = 'work',
  WORDS = 'words',
}

interface Translation {
  id: number
  text: string
  translatedText: string
  categories: Category[]
}

export const translations: Translation[] = [
  {
    id: 1,
    text: 'Qual é o seu nome?',
    translatedText: 'What is your name?',
    categories: [Category.QUESTIONS],
  },
  {
    id: 2,
    text: 'Olá, como você está?',
    translatedText: 'Hello, how are you?',
    categories: [Category.GREETINGS],
  },
  {
    id: 3,
    text: 'Bom dia!',
    translatedText: 'Good morning!',
    categories: [Category.GREETINGS],
  },
  {
    id: 4,
    text: 'O que você vai fazer amanhã?',
    translatedText: 'What are you going to do tomorrow?',
    categories: [Category.DAY_TO_DAY],
  },
  {
    id: 5,
    text: 'Bom trabalho!',
    translatedText: 'Good job!',
    categories: [Category.WORK, Category.GREETINGS],
  },
  {
    id: 6,
    text: 'Com certeza!',
    translatedText: 'Sure!',
    categories: [Category.WORDS, Category.DAY_TO_DAY],
  },
]
