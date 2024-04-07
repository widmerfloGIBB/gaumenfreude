import {Product} from "./product";

export interface Supplier {
  id: number,
  name: string,
  email: string,
  address: string,
  manager: string,
  products: Product[]
}
