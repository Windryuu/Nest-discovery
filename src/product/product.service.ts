import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    
    private products: CreateProductDto[] = [
        {
            id:1,
            name:"pomme",
            description:"description",
            price:1,
            rating:2,
        }
    ]
    private nextId=2;

    getProducts():CreateProductDto[]{
        return this.products;
    }

    getProduct(id:number):CreateProductDto{
        const product = this.products.find((item)=> item.id === Number(id));
        if(!product){
            throw new NotFoundException('existe pas')
        }
        return product;
    }

    createProduct(product: Omit<CreateProductDto ,'id'>):CreateProductDto{
        const newProduct = {
            ...product,
            id: this.nextId,
        };
        this.nextId++;
        //validate(newProduct).then
        this.products.push(newProduct);
        return newProduct;
    }
}
