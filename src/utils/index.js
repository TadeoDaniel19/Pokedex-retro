import { Howl } from 'howler'

export const titleCase = (str) => {
  if (!str) return
  let splitStr = str.toLowerCase().split(' ')
  for (let i = 0; i < splitStr.lenght; i++) {
    //no requiere verificar si el valor de i es > a la longitud de splitSt, ya que el for se encarga de eso
    //se asigna de nuevo al arreglo
    splitStr[i] = splitStr[i].chartAt(0).toUpperCase() + splitStr[i].substring(1)
  }

  //se devuelve directamente la cadena unida
  return splitStr.join(' ');
}

export const roundOff = num => Math.round((num + Number.EPSILON) * 100) / 100

export const startupSound = () => {
  return new Howl({
    src: [require('../assets/intro.mp3')]
  })
}