import Decorator from "./Decorator.js";
export default class DecoratorDiscountLable extends Decorator {
    constructor(productCard, _discount) {
        super(productCard);
        this._discount = _discount;
    }
    calculateDiscountPrice(price) {
        return (price - price * Math.abs(this._discount) / 100);
    }
    createDiscountLabels() {
        const discountLableElement = document.createElement('span');
        discountLableElement.classList.add('product-card__lable', 'product-card__lable_discount');
        discountLableElement.innerText = (-Math.abs(this._discount)).toString().concat('%');
        return discountLableElement;
    }
    createDiscountPrice(productData) {
        const discountPrice = document.createElement('p');
        discountPrice.classList.add('product-card__price', 'product-card__price_with-share');
        const priceWithDiscount = this.calculateDiscountPrice(productData.price);
        discountPrice.innerText = `${priceWithDiscount.toFixed(2)}$`;
        return discountPrice;
    }
    render(productData) {
        var _a, _b, _c;
        const productCard = super.render(productData);
        (_a = productCard.querySelector('.product-card__lables')) === null || _a === void 0 ? void 0 : _a.append(this.createDiscountLabels());
        (_b = productCard.querySelector('.product-card__price-section .product-card__price')) === null || _b === void 0 ? void 0 : _b.classList.add('product-card__price_before-share');
        (_c = productCard.querySelector('.product-card__price-section')) === null || _c === void 0 ? void 0 : _c.prepend(this.createDiscountPrice(productData));
        return productCard;
    }
}
//# sourceMappingURL=DecoratorDiscountLable.js.map