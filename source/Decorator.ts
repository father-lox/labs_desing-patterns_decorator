import IProductCard from './IProductCard.js';
import Product from './Product.js';

export default class Decorator implements IProductCard {
    constructor(protected productCard: IProductCard) {}

    createProductCard(productData: Product): HTMLLIElement {
        return this.productCard.createProductCard(productData);
    }
    createProductName(productData: Product): HTMLHeadingElement {
        return this.productCard.createProductName(productData);
    }
    createProductDescription(productData: Product): HTMLParagraphElement {
        return this.productCard.createProductDescription(productData);
    }
    createLabels(productData: Product): HTMLDivElement {
        return this.productCard.createLabels(productData);
    }
    createPrice(productData: Product): HTMLDivElement {
        return this.productCard.createPrice(productData);
    }
    render(productData: Product): HTMLLIElement {
        return this.productCard.render(productData);
    }
}