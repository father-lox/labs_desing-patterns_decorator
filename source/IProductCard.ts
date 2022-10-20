import Product from './Product.js';

interface IProductCard {
    render(productData: Product): HTMLLIElement;
}

export default IProductCard;