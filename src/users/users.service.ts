/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // const checkUserName = await this.findOne(createUserDto.name);
    const hash = await this.hashData(createUserDto.password);
    const user = this.prisma.users.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: hash,
      },
    });
    // if (checkUserName) {
    //   throw Error(`User ${createUserDto.name} already exists`);
    // }
    return user;
  }

  async findAll() {
    const users = await this.prisma.users.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return users;
  }

  async findOne(name: string) {
    const user = await this.prisma.users.findUnique({
      where: { name },
    });
    if (!user) {
      throw Error(`Ops... USer ${name} not found`);
    }
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: { email },
    });
    if (!user) {
      throw Error(`Ops... USer ${email} not found`);
    }
    return user;
  }

  async update(name: string, updateUserDto: UpdateUserDto) {
    const User = await this.findOne(name);
    const updatedUser = await this.prisma.users.update({
      where: { name },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
      },
    });
    if (!User) {
      throw Error(`Ops... User ${name} not found`);
    }
    return updatedUser;
  }

  async remove(name: string) {
    const user = await this.findOne(name);
    const deletedUser = await this.prisma.users.delete({
      where: { name },
    });
    if (!user) {
      throw Error(`Ops... User ${name} not found`);
    }
    return deletedUser;
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }
}
