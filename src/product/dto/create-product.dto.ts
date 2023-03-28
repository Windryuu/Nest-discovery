import { MinLength,IsNotEmpty } from "class-validator";

export class CreateProductDto {
    
    id:number;

    @MinLength(10)
    name : string;

    @MinLength(20)
    description : string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    rating: number;

    @IsNotEmpty()
    isActive: boolean;
}