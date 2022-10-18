import Product from './Product.js';

interface IProductCard {
    createProductCard(productData: Product): HTMLLIElement;
    createProductName(productData: Product): HTMLHeadingElement;
    createProductDescription(productData: Product): HTMLParagraphElement;
    createLabels(productData: Product): HTMLDivElement;
    createPrice(productData: Product): HTMLDivElement;
    render(productData: Product): HTMLLIElement;
}

export default IProductCard;