import Decorator from "./Decorator.js";
export default class DecoratorShareLable extends Decorator {
    constructor(productCard, _shareDescription) {
        super(productCard);
        this._shareDescription = _shareDescription;
    }
    showShareDescription() {
        alert(this._shareDescription);
    }
    createShareLabels() {
        const shareLableElement = document.createElement('span');
        shareLableElement.classList.add('product-card__lable', 'product-card__lable_share');
        shareLableElement.innerText = 'share';
        shareLableElement.addEventListener('click', this.showShareDescription.bind(this));
        return shareLableElement;
    }
    render(productData) {
        var _a;
        const productCard = super.render(productData);
        (_a = productCard.querySelector('.product-card__lables')) === null || _a === void 0 ? void 0 : _a.append(this.createShareLabels());
        return productCard;
    }
}
//# sourceMappingURL=DecoratorShareLable.js.map