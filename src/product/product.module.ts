import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './Entity/product.entity';
import { ProductRepository } from './Entity/product.repository';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports : [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService,ProductRepository],
  exports: [ProductService],
})
export class ProductModule {}
