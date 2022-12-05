export default class Decorator {
    constructor(productCard) {
        this.productCard = productCard;
    }
    render(productData) {
        return this.productCard.render(productData);
    }
}
//# sourceMappingURL=Decorator.js.map