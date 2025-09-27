// Import the required modules
import ProductData from "./ProductData.mjs";  // Handles fetching and managing product data
import ProductList from "./ProductList.mjs";  // Responsible for rendering the list of products
import Alert from "./alert.js";               // Handles displaying alert messages from a JSON file

// Create a new ProductData instance for the "tents" category
const dataSource = new ProductData("tents");

// Select the container element where products will be displayed
const element = document.querySelector(".product-list");

// Create a new ProductList instance with the category, data source, and container element
const productList = new ProductList("tents", dataSource, element);

// Initialize the product list (fetch and render products)
productList.init();

// Create a new Alert instance pointing to the alerts JSON file
const alert = new Alert("/json/alert.json");

// Initialize the alert system (fetch and render alerts if available)
alert.init();
