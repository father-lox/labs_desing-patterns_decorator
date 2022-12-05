import ProductCard from "./ProductCard.js";
import Product from "./Product.js";
import DecoratorDiscountLable from "./Decorators/DecoratorDiscountLable.js";
import DecoratorShareLable from "./Decorators/DecoratorShareLable.js";
import productArray from './data.js';
import getShareDescription from "./shareList.js";
import generateDiscount from "./generateDiscount.js";

const app: HTMLUListElement= document.querySelector('#app .list-poroducts') as HTMLUListElement;

productArray.forEach((product, index) => {
    if (index % 2 === 0) {
        app.append(new DecoratorShareLable(new ProductCard(), getShareDescription()).render(product));
    }
    if (index % 3 === 0) {
        app.append(new DecoratorDiscountLable(new ProductCard(), generateDiscount()).render(product));
    }
    if (index % 5 === 0) {
        app.append(new DecoratorShareLable(new DecoratorDiscountLable(new ProductCard(), generateDiscount()), getShareDescription()).render(product));
    }
});