import Decorator from "./Decorator.js";
import IProductCard from "../IProductCard.js";
import Product from "../Product.js";

export default class DecoratorDiscountLable extends Decorator {
    constructor(productCard: IProductCard, private _discount: number) {
        super(productCard);
    }

    private calculateDiscountPrice(price: number): number {
        return (price - price * Math.abs(this._discount) / 100)
    }

    private createDiscountLabels(): HTMLSpanElement {
        const discountLableElement: HTMLSpanElement = document.createElement('span');
        discountLableElement.classList.add('product-card__lable', 'product-card__lable_discount');
        discountLableElement.innerText = (-Math.abs(this._discount)).toString().concat('%');

        return discountLableElement;
    }

    private createDiscountPrice(productData: Product): HTMLParagraphElement {
            const discountPrice: HTMLParagraphElement = document.createElement('p');
            discountPrice.classList.add('product-card__price', 'product-card__price_with-share');
            
            const priceWithDiscount: number = this.calculateDiscountPrice(productData.price);
            discountPrice.innerText = `${priceWithDiscount.toFixed(2)}$`;
            
            return discountPrice;
    }

    render(productData: Product): HTMLLIElement {
        const productCard: HTMLLIElement = super.render(productData);

        productCard.querySelector('.product-card__lables')?.append(this.createDiscountLabels());
        
        productCard.querySelector('.product-card__price-section .product-card__price')?.classList.add('product-card__price_before-share');
        productCard.querySelector('.product-card__price-section')?.prepend(this.createDiscountPrice(productData));

        return productCard;
    }
}