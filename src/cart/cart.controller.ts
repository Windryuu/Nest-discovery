import { Controller, Get } from '@nestjs/common';
import { CartRepository } from './Entity/cart.repository';

@Controller('cart')
export class CartController {
    constructor(
        private readonly cartRepository: CartRepository,
    ){}

    @Get()
    findAll(){
        return this.cartRepository.findAll();
    }
}
