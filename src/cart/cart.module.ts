import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './Entity/cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartRepository } from './Entity/cart.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  providers: [CartService,CartRepository],
  controllers: [CartController],
  exports: [CartService],
})
export class CartModule {}
