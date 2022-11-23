import { Prisma } from '@prisma/client';

export class Category implements Prisma.CategoriesUncheckedCreateInput {
  name: string;
}
