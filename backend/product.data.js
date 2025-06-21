// product.data.js

const products = [
  {
    "id": "1",
    "name": "Wireless Mouse",
    "price": 19.99,
    "image": "/images/1.jpeg",
    "description": "A sleek and responsive wireless mouse designed for productivity and portability.",
    "category": "Accessories"
  },
  {
    "id": "2",
    "name": "Bluetooth Headphones",
    "price": 49.99,
    "image": "/images/2.jpg",
    "description": "Comfortable over-ear Bluetooth headphones with crystal-clear sound and deep bass.",
    "category": "Audio"
  },
  {
    "id": "3",
    "name": "Mechanical Keyboard",
    "price": 89.99,
    "image": "/images/3.jpeg",
    "description": "High-performance mechanical keyboard with tactile feedback and customizable RGB lighting.",
    "category": "Accessories"
  }
];

function getProductsfun() {
    return products;
}

function addProductfun(product) {
    products.push(product);
}

function deleteProductfun(id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        return true;
    }
    return false;
}
function getProductByIdfun(id) {
    return products.find(product => product.id === id) || null;
}

module.exports = {
    getProductsfun,
    addProductfun,
    deleteProductfun,
    getProductByIdfun
};
