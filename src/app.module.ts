import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ProdutosModule, UsersModule, AuthModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
