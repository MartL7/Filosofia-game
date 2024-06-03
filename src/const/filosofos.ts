interface Filosofos {
  id: string
  name: string
  imagePresentation: string
  imageSmall: string
  topic: string
  escenaryImage1: string
  escenaryImage2?: string
  phrases: string[]
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
      'Locke creía que la mente al nacer es una "pizarra en blanco" (tabula rasa) y que todo conocimiento proviene de la experiencia sensorial y la reflexión.',

      'A diferencia de los racionalistas, Locke sostenía que el conocimiento humano se basa en la experiencia sensorial y la observación, no en ideas innatas.',

      'Locke argumentaba que todos los individuos tienen derechos naturales a la vida, la libertad y la propiedad, y que estos derechos son inalienables'
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
      'Cogito, ergo sum ("Pienso, luego existo"): Esta es la afirmación más famosa de Descartes, que expresa la certeza de la existencia propia como resultado del acto de pensar.',

      'Dios: Descartes argumenta que la existencia de Dios es necesaria para garantizar la verdad de la razón y la ciencia.',

      'Descartes creía que el mundo físico podía ser explicado en términos de materia y movimiento, y que los fenómenos naturales podían ser entendidos como máquinas.'
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
      ' Kant sostenía que la moralidad se basa en la razón y la autonomía del individuo, es decir, en la capacidad de los seres humanos para legislar sus propias leyes morales a través de la razón.',

      'La ética de Kant se basa en la idea de deber y en el cumplimiento de las obligaciones morales por sí mismas, no en las consecuencias de las acciones.',

      'Kant distinguía entre los fenómenos (lo que podemos percibir y conocer) y los noúmenos (la realidad en sí misma, que está más allá de nuestra comprensión directa).'
    ]
  }
]