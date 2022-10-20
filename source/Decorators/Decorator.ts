import IProductCard from '../IProductCard.js';
import Product from '../Product.js';

export default class Decorator implements IProductCard {
    constructor(protected productCard: IProductCard) {}

    render(productData: Product): HTMLLIElement {
        return this.productCard.render(productData);
    }
}