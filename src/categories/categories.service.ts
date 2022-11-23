import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prisma.categories.create({
      data: createCategoryDto,
    });
    return category;
  }

  async findAll() {
    const categories = await this.prisma.categories.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return categories;
  }

  async findOne(id: number) {
    const category = await this.prisma.categories.findUnique({
      where: { id },
    });
    if (!category) {
      throw Error(`Ops... ID ${id} not found`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id);
    if (!category) {
      throw Error(`Ops... ID ${id} not found`);
    }
    const updatedCategory = await this.prisma.categories.update({
      where: { id },
      data: updateCategoryDto,
    });
    return updatedCategory;
  }

  async remove(id: number) {
    const category = await this.findOne(id);
    if (!category) {
      throw Error(`Ops... ID ${id} not found`);
    }
    const deletedCategory = await this.prisma.categories.delete({
      where: { id },
    });
    return deletedCategory;
  }
}
