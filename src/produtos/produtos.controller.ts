/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  Put,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('produtos')
@UseGuards(AuthGuard('jwt'))
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    try {
      return await this.produtosService.create(createProdutoDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.produtosService.findAll();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.produtosService.findOne(+id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ) {
    try {
      return await this.produtosService.update(+id, updateProdutoDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.produtosService.remove(+id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
