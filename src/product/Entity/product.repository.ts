import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CreateProductDto } from "../dto/create-product.dto";
import { Product } from "./product.entity";

@Injectable()
export class ProductRepository extends Repository<Product>{
    constructor(
        private dataSource: DataSource
    ){
        super(Product, dataSource.createEntityManager());
    }

    findAll(): Promise<Product[]> {
        return this.find();
    }

    findOneProduct(id:number):Promise<Product|null>{
        return this.findOneBy({id});
    }

    async createProduct(product: Product){
        await this.dataSource.transaction(async manager =>{
            let prod = new Product(product.name,product.description,product.price,product.rating);
            await manager.save(prod);
        })
    }

    async updateProduct(id:number,newProduct:Product){
        let oldProduct = await this.findOneProduct(id);
        if(oldProduct.description !== newProduct.description){
            oldProduct.description = newProduct.description
        }
        await this.dataSource.transaction(async manager =>{
            await manager.save(oldProduct);
        })
    }

    async removeProduct(id:number): Promise<void>{
        console.log(id);
        await this.delete(id);
    }
}