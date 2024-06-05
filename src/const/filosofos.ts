interface Filosofos {
  id: string
  name: string
  imagePresentation: string
  imageSmall: string
  topic: string
  escenaryImage1: string
  escenaryImage2?: string
  phrases?: Questions[]
  phrases2?: string[]
}


interface Questions {
  question: string
  options: string[]
  answer: string
}

export const filosofos: Filosofos[] = [
  {
    id: 'filosofo-Jhon-Locke',
    name: 'Jhon Locke',
    imagePresentation: '/img/Locke/Locke-image-presentation.webp',
    imageSmall: '/img/Locke/Locke-image-small.webp',
    topic: 'Empirismo',
    escenaryImage1: '/img/Locke/Locke-escenary-2.webp',
    escenaryImage2: '/img/Locke/Locke-escenary-2.webp',
    phrases: [
      {
        question: '¿Qué es la filosofía según Locke?',
        options: [
          'Es el estudio de la realidad',
          'Es el estudio de la mente',
          'Es el estudio de la moral',
          'Es el estudio de la política'
        ],
        answer: 'Es el estudio de la mente'
      },
      {
        question: '¿Qué es la mente según Locke?',
        options: [
          'Es un tabula rasa',
          'Es una sustancia inmaterial',
          'Es una sustancia material',
          'Es una sustancia espiritual'
        ],
        answer: 'Es un tabula rasa'
      },
      {
        question: '¿Qué es la idea según Locke?',
        options: [
          'Es una representación de la realidad',
          'Es una representación de la mente',
          'Es una representación de la moral',
          'Es una representación de la política'
        ],
        answer: 'Es una representación de la realidad'
      }
    ],
    phrases2: [
      'La mente es como un papel en blanco',
      'La mente es como una tabula rasa',
      'La mente es como un libro en blanco',
      'La mente es como un cuaderno en blanco',
      'La mente es como un papel en blanco'
    ]
  },
  
  {
    id: 'filosofo-Rene-Descartes',
    name: 'Rene Descartes',
    imagePresentation: '/img/Descartes/Descartes-image-presentation.webp',
    imageSmall: '/img/Descartes/Descartes-image-small.webp',
    topic: 'Racionalismo',
    escenaryImage1: '/img/Descartes/Descartes-escenary-1.webp',
    phrases: [
      {
        question: '¿Qué es la filosofía según Descartes?',
        options: [
          'Es el estudio de la realidad',
          'Es el estudio de la mente',
          'Es el estudio de la moral',
          'Es el estudio de la política'
        ],
        answer: 'Es el estudio de la mente'
      },
      {
        question: '¿Qué es la mente según Descartes?',
        options: [
          'Es un tabula rasa',
          'Es una sustancia inmaterial',
          'Es una sustancia material',
          'Es una sustancia espiritual'
        ],
        answer: 'Es una sustancia inmaterial'
      },
      {
        question: '¿Qué es la idea según Descartes?',
        options: [
          'Es una representación de la realidad',
          'Es una representación de la mente',
          'Es una representación de la moral',
          'Es una representación de la política'
        ],
        answer: 'Es una representación de la realidad'
      }
    ],
    phrases2: [
      'La mente es como un papel en blanco',
      'La mente es como una tabula rasa',
      'La mente es como un libro en blanco',
      'La mente es como un cuaderno en blanco',
      'La mente es como un papel en blanco'
    ]
  }, 

  {
    id: 'filosofo-Immanuel-Kant',
    name: 'Immanuel Kant',
    imagePresentation: '/img/Kant/Kant-image-presentation.webp',
    imageSmall: '/img/Kant/Kant-image-small.webp',
    topic: 'cristicismo',
    escenaryImage1: '/img/Kant/Kant-escenary-1.webp',
    phrases: [
      {
        question: '¿Qué es la filosofía según Kant?',
        options: [
          'Es el estudio de la realidad',
          'Es el estudio de la mente',
          'Es el estudio de la moral',
          'Es el estudio de la política'
        ],
        answer: 'Es el estudio de la moral'
      },
      {
        question: '¿Qué es la mente según Kant?',
        options: [
          'Es un tabula rasa',
          'Es una sustancia inmaterial',
          'Es una sustancia material',
          'Es una sustancia espiritual'
        ],
        answer: 'Es una sustancia inmaterial'
      },
      {
        question: '¿Qué es la idea según Kant?',
        options: [
          'Es una representación de la realidad',
          'Es una representación de la mente',
          'Es una representación de la moral',
          'Es una representación de la política'
        ],
        answer: 'Es una representación de la realidad'
      }
    ],
    phrases2: [
      'La mente es como un papel en blanco',
      'La mente es como una tabula rasa',
      'La mente es como un libro en blanco',
      'La mente es como un cuaderno en blanco',
      'La mente es como un papel en blanco'
    ]
  }
]