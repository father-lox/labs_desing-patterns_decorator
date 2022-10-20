import ProductCard from "./ProductCard.js";
import Product from "./Product.js";
import DecoratorDiscountLable from "./Decorators/DecoratorDiscountLable.js";
import DecoratorShareLable from "./Decorators/DecoratorShareLable.js";


const googlePixel7: Product = new Product(
    'Google Pixel 7',
    'Ducimus doloribus, dignissimos repellat reiciendis rerum cumque minus fugiat ullam consequatur voluptates pariatur? Architecto, aut corrupti vero cupiditate ut reiciendis molestias cum.',
    479, 
    ['new', 'БУ']);

const app: HTMLUListElement= document.querySelector('#app .list-poroducts') as HTMLUListElement;

// new DecoratorDiscountLable(new ProductCard(), ).render(app, googlePixel7);

app.append(
    new DecoratorShareLable(
        new DecoratorDiscountLable(
            new ProductCard(), 93), 'reiciendis rerum cumque minus fugiat ullam consequatur').render(googlePixel7));