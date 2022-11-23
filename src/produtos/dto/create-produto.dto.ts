/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Produto } from '../entities/produto.entity';

export class CreateProdutoDto extends Produto {
  @IsNotEmpty({
    message: 'name is required',
  })
  @IsString({
    message: 'name must be a string',
  })
  name: string;

  @IsNotEmpty({
    message: 'price is required',
  })
  @IsNumber({})
  price: number;

  @IsNotEmpty({
    message: 'model is required',
  })
  @IsString({
    message: 'model must be a string',
  })
  model: string;

  @IsNotEmpty({
    message: 'category is required',
  })
  @IsNumber({})
  categoriesId: number;
}
