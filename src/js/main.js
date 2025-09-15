// main.js
import ProductData from "./ProductData.js";

// Create an instance
const productData = new ProductData();

// Example: load some products
productData.loadProducts([
  { id: 1, name: "Tent A", price: 100 },
  { id: 2, name: "Tent B", price: 150 }
]);

// Test it
console.log(productData.getProductById(1));
