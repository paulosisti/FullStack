/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';

export class Produto implements Prisma.ProductsUncheckedCreateInput {
  id?: number;
  name: string;
  price: number;
  model: string;
}
