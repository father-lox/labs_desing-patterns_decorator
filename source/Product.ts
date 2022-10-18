export default class Product {
    constructor(
        private _productName: string,
        private _productDescription: string,
        private _productPrice: number,
        private _productLables: string[]
    ) {}

    
    public get name() : string {
        return this._productName;
    }

    public get description() : string {
        return this._productDescription;
    }
    
    
    public get price() : number {
        return this._productPrice
    }

    
    public get lables() : string[] {
        return this._productLables;
    }
} 