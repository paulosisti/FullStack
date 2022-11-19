import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProdutosModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
