export default class ProductCard {
    createProductCard() {
        const card = document.createElement('li');
        card.classList.add('product-card');
        return card;
    }
    createProductName(productData) {
        const productName = document.createElement('h2');
        productName.classList.add('product-card__name');
        productName.innerText = productData.name;
        return productName;
    }
    createProductDescription(productData) {
        const productDescription = document.createElement('p');
        productDescription.classList.add('product-card__description');
        productDescription.innerText = productData.description;
        return productDescription;
    }
    createLabels(productData) {
        const productLabels = document.createElement('div');
        productLabels.classList.add('product-card__lables');
        productData.lables.forEach(lableName => {
            const lableElement = document.createElement('span');
            lableElement.classList.add('product-card__lable');
            lableElement.innerText = lableName;
            productLabels.append(lableElement);
        });
        return productLabels;
    }
    createPrice(productData) {
        const productPriceSection = document.createElement('div');
        productPriceSection.classList.add('product-card__price-section');
        const productPrice = document.createElement('p');
        productPrice.classList.add('product-card__price');
        productPrice.innerText = `${productData.price}$`;
        productPriceSection.append(productPrice);
        return productPriceSection;
    }
    render(productData) {
        const productCard = this.createProductCard();
        productCard.append(this.createProductName(productData));
        productCard.append(this.createProductDescription(productData));
        productCard.append(this.createLabels(productData));
        productCard.append(this.createPrice(productData));
        return productCard;
    }
}
//# sourceMappingURL=ProductCard.js.map