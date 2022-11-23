import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categorias')
@UseGuards(AuthGuard('jwt'))
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoriesService.create(createCategoryDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.categoriesService.findAll();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.categoriesService.findOne(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    try {
      return await this.categoriesService.update(id, updateCategoryDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      return await this.categoriesService.remove(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
