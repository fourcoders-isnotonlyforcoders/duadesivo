type ProcessType = {
  src: string,
  alt: string,
  hoverSrc: string
};

// TODO: alterar imagens 
export const Process : ProcessType[] = [
  {
    src: './images/tijoloP.jpg',
    alt: 'recebimento',
    hoverSrc: './images/1.png'
  },
  {
    src: './images/gomesP.jpg',
    alt: 'impressão',
    hoverSrc: './images/2.png'
  },
  {
    src: './images/process.avif',
    alt: 'recorte',
    hoverSrc: './images/3.png'
  },
  {
    src: './images/impressao.avif',
    alt: 'revisão',
    hoverSrc: './images/4.png'
  },


  {
    src: './images/acaiP.jpg',
    alt: 'finalização',
    hoverSrc: './images/5.png'
  }, 
  {
    src: './images/aladinP.jpg',
    alt: 'entrega',
    hoverSrc: './images/6.png'
  }
]
