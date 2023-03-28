import { Controller, Post,  Get, Query } from '@nestjs/common';
import { Param,Body, UseGuards, Put, Delete } from '@nestjs/common/decorators';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './Entity/product.repository';
import { ProductRolesGuard } from './product-role.guard';
import { ProductService } from './product.service';

@Controller('product')
@UseGuards(new ProductRolesGuard())
export class ProductController {
    constructor(
        private readonly productService: ProductService,
        private readonly productRepository : ProductRepository
    ) {}

    @Get()
    findAll(){
        //return this.productService.getProducts();
        return this.productRepository.findAll();
    }

    @Get(':id')
    findOne(@Param() params) {
        //return this.productService.getProduct(params.id);
        return this.productRepository.findOneProduct(params.id);
    }

    @Post()
    createProduct(@Body() product: CreateProductDto){ //validator ici
        //return this.productService.createProduct(product);
        return this.productRepository.createProduct(product)
    }

    @Put(':id')
    updateProduct(@Body() product: CreateProductDto, @Param() params){
        return this.productRepository.updateProduct(params.id,product)
    }

    @Delete(':id')
    deleteProduct(@Param() params){
        console.log(params.id);
        return this.productRepository.removeProduct(params.id)
    }
}
