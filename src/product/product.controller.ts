import { Controller, Post,  Get, Query } from '@nestjs/common';
import { Param,Body, UseGuards } from '@nestjs/common/decorators';
import { AppService } from 'src/app.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRolesGuard } from './product-role.guard';
import { ProductService } from './product.service';

@Controller('product')
@UseGuards(new ProductRolesGuard())
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    findAll(){
        return this.productService.getProducts();
    }

    @Get(':id')
    findOne(@Param() params) {
        return this.productService.getProduct(params.id);
    }

    @Post()
    createProduct(@Body() product: CreateProductDto):CreateProductDto{ //validator ici
        return this.productService.createProduct(product);
    }
}
