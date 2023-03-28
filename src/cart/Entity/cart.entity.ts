import { Product } from "src/product/Entity/product.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cart{
    constructor(){

    }

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userId:number;

    @ManyToMany(()=>Product)
    @JoinTable()
    product: Product[]

    @Column()
    quantity:number;
}