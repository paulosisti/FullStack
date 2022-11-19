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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    try {
      return await this.usersService.findOne(name);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      return await this.usersService.update(name, updateUserDto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Delete(':name')
  async remove(@Param('name') name: string) {
    try {
      return await this.usersService.remove(name);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
