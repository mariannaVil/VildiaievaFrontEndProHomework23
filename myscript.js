let categories = document.getElementById('categories');
let products = document.getElementById('products');
let productInfo = document.getElementById('product-info');

let categoryData = [
    { id: 1, name: 'Категорія 1' },
    { id: 2, name: 'Категорія 2' },
];
let productData = [
    { id: 1, name: 'Товар 1', categoryId: 1, description: 'Опис товару 1' },
    { id: 2, name: 'Товар 2', categoryId: 1, description: 'Опис товару 2' },
    { id: 3, name: 'Товар 3', categoryId: 2, description: 'Опис товару 3' },
];
function displayCategories() {
    categories.innerHTML = '';
    categoryData.forEach(category => {
        let categoryElement = document.createElement('div');
        categoryElement.textContent = category.name;
        categoryElement.addEventListener('click', () => {
            displayProducts(category.id);
        });
        categories.appendChild(categoryElement);
    });
}
function displayProducts(categoryId) {
    products.innerHTML = '';
    let productsInCategory = productData.filter(product => product.categoryId === categoryId);
    productsInCategory.forEach(product => {
        let productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.addEventListener('click', () => {
            displayProductInfo(product);
        });
        products.appendChild(productElement);
    });
}
function displayProductInfo(product) {
    productInfo.innerHTML = '';
    let productInfoElement = document.createElement('div');
    productInfoElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <button id="buy-button">Купити</button>
    `;
    let buyButton = productInfoElement.querySelector('#buy-button');
    buyButton.addEventListener('click', () => {
        alert('Товар куплений!');
        displayCategories(); 
    });
    productInfo.appendChild(productInfoElement);
}
displayCategories();