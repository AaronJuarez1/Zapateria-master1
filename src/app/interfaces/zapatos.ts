export interface Zapatosid extends Zapatos{
  id:string
}

export interface Zapatos {
  producto: string,
  precio: number,
  img: string,
  info: string,
}
