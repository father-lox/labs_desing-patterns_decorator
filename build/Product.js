export default class Product {
    constructor(_productName, _productDescription, _productPrice, _productLables) {
        this._productName = _productName;
        this._productDescription = _productDescription;
        this._productPrice = _productPrice;
        this._productLables = _productLables;
    }
    get name() {
        return this._productName;
    }
    get description() {
        return this._productDescription;
    }
    get price() {
        return this._productPrice;
    }
    get lables() {
        return this._productLables;
    }
}
//# sourceMappingURL=Product.js.map