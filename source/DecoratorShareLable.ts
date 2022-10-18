import Decorator from "./Decorator.js";
import IProductCard from "./IProductCard.js";
import Product from "./Product.js";

export default class DecoratorShareLable extends Decorator {
    constructor(productCard: IProductCard, private _shareDescription: string) {
        super(productCard);
    }

    private showShareDescription(): void {
        alert(this._shareDescription);
    }

    private createShareLabels(): HTMLSpanElement {
        const shareLableElement: HTMLSpanElement = document.createElement('span');
        shareLableElement.classList.add('product-card__lable', 'product-card__lable_share');
        shareLableElement.innerText = 'share';
        shareLableElement.addEventListener('click', this.showShareDescription.bind(this));

        return shareLableElement;
    }

    render(productData: Product): HTMLLIElement {
        const productCard: HTMLLIElement = super.render(productData);
        productCard.querySelector('.product-card__lables')?.append(this.createShareLabels());
        return productCard;
    }
}