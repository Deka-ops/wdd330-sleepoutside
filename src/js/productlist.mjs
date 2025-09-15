import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  // Check if product is discounted
  const isDiscounted = product.FinalPrice < product.SuggestedRetailPrice;
  const discountPercent = isDiscounted
    ? Math.round(
        ((product.SuggestedRetailPrice - product.FinalPrice) /
          product.SuggestedRetailPrice) *
          100
      )
    : 0;

  return `
    <li class="product-card">
      <a href="product_pages/?products=${product.Id}">
        <img src="${product.Image}" alt="${product.Name}">
        <h2>${product.Brand?.Name ?? ""}</h2>
        <h3>${product.Name}</h3>
        
        <div class="product-price-block">
          <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
          ${
            isDiscounted
              ? `<p class="product-card__retail"><s>$${product.SuggestedRetailPrice.toFixed(
                  2
                )}</s></p>
                 <span class="discount-badge">-${discountPercent}%</span>`
              : ""
          }
        </div>
      </a>
      <button class="add-to-cart" data-id="${product.Id}">Add to Cart</button>
    </li>
  `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    try {
      // Ask dataSource for this category
      const list = await this.dataSource.getData(this.category);
      this.renderList(list);
    } catch (err) {
      console.error("Error loading product list:", err);
      this.listElement.innerHTML = `<p class="error">Sorry, products could not be loaded.</p>`;
    }
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}
