/* eslint-disable prettier/prettier */
import { Produto } from "../entities/produto.entity";

export class CreateProdutoDto extends Produto{
  name: string;
  price: number;
  model: string;
}
