// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";

const companyFilter = getElement(".company-title");
const companyOverlay = getElement(".company-filter");
const loading = getElement(".page-loading");

display(store, getElement(".products-container"));

companyFilter.addEventListener("click", () => {
  companyOverlay.classList.toggle("show");
});

setupSearch(store);
setupCompanies(store);
setupPrice(store);
loading.style.display = "none";
