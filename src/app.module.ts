import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product/Entity/product.entity';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/Entity/cart.entity';

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'prem-nest',
      entities: [Product,Cart],
      synchronize: true,

    }),
    CartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
