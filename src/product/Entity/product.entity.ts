import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    constructor(name: string,description: string,price: number,rating: number){
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating = rating;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    rating: number;

    @Column({default: true})
    isActive: boolean;
}