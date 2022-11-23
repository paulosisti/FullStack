import { IsNotEmpty, IsString } from 'class-validator';
import { Category } from '../entities/category.entity';

export class CreateCategoryDto extends Category {
  @IsNotEmpty({
    message: 'name is required',
  })
  @IsString({
    message: 'name must be a string',
  })
  name: string;
}
