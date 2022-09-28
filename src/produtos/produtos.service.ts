/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProdutoDto: CreateProdutoDto) {
    const produto = await this.prisma.products.create({
      data: createProdutoDto,
    });
    return produto;
  }

  async findAll() {
    const produtos = await this.prisma.products.findMany({
      orderBy: { id: 'asc'}
    });
    return produtos;
  }

  async findOne(id: number) {
    const produto = await this.prisma.products.findUnique({
      where: { id }
    });
    return produto;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const updatedProduto = await this.prisma.products.update({
      where: { id },
      data: updateProdutoDto,
    });
    return updatedProduto;
  }

  async remove(id: number) {
    const deletedProduto = await this.prisma.products.delete({
      where: { id },
    });
    return deletedProduto;
  }
}
