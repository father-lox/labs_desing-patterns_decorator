import IProductCard from './IProductCard.js';
import Product from './Product.js';

export default class ProductCard implements IProductCard {
    private createProductCard(): HTMLLIElement {
        const card: HTMLLIElement = document.createElement('li');
        card.classList.add('product-card');

        return card;
    }

    private createProductName(productData: Product): HTMLHeadingElement {
        const productName: HTMLHeadingElement = document.createElement('h2');
        productName.classList.add('product-card__name');
        productName.innerText = productData.name;
        
        return productName;
    }

    private createProductDescription(productData: Product): HTMLParagraphElement {
        const productDescription: HTMLParagraphElement = document.createElement('p');
        productDescription.classList.add('product-card__description');
        productDescription.innerText = productData.description;

        return productDescription;
    }

    private createLabels(productData: Product): HTMLDivElement {
        const productLabels: HTMLDivElement = document.createElement('div');
        productLabels.classList.add('product-card__lables');

        productData.lables.forEach(lableName => {
            const lableElement: HTMLSpanElement = document.createElement('span');
            lableElement.classList.add('product-card__lable');
            lableElement.innerText = lableName;

            productLabels.append(lableElement);
        });

        return productLabels;
    }

    private createPrice(productData: Product): HTMLDivElement {
        const productPriceSection: HTMLDivElement = document.createElement('div');
        productPriceSection.classList.add('product-card__price-section');

        const productPrice: HTMLParagraphElement = document.createElement('p');
        productPrice.classList.add('product-card__price')
        productPrice.innerText = `${productData.price}$`;

        productPriceSection.append(productPrice);
        
        return productPriceSection;
    }

    render(productData: Product): HTMLLIElement {
        const productCard: HTMLLIElement = this.createProductCard();
        productCard.append(this.createProductName(productData));
        productCard.append(this.createProductDescription(productData));
        productCard.append(this.createLabels(productData));
        productCard.append(this.createPrice(productData));

        return productCard;
    }
}
