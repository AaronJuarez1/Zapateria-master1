export interface Zapatosid extends Zapatos{
  id:string
}

// es una plantila para los productos 
export interface Zapatos {
  producto: string,
  precio: number,
  img: string,
  info: string,
}
