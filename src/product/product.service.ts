import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './Entity/product.entity';

@Injectable()
export class ProductService {
    constructor(
        private dataSource: DataSource
    ){}
    
    // private products: CreateProductDto[] = [
    //     {
    //         id:1,
    //         name:"pomme",
    //         description:"description",
    //         price:1,
    //         rating:2,
    //     }
    // ]
    // private nextId=2;

    // getProducts():CreateProductDto[]{
    //     return this.products;
    // }

    // findAll(): Promise<Product[]> {
    //     return this.productRepository.find();
    // }

    // getProduct(id:number):CreateProductDto{
    //     const product = this.products.find((item)=> item.id === Number(id));
    //     if(!product){
    //         throw new NotFoundException('existe pas')
    //     }
    //     return product;
    // }

    // findOne(id:number):Promise<Product|null>{
    //     return this.productRepository.findOneBy({id});
    // }

    // createProduct(product: Omit<CreateProductDto ,'id'>):CreateProductDto{
    //     const newProduct = {
    //         ...product,
    //         id: this.nextId,
    //     };
    //     this.nextId++;
    //     this.products.push(newProduct);
    //     return newProduct;
    // }

    // async createProduct(product: Product){
    //     await this.dataSource.transaction(async manager =>{
    //         let prod = new Product(product.name,product.description,product.price,product.rating);
    //         await manager.save(prod);
    //     })
    // }

}
