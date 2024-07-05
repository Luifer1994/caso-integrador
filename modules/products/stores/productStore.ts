// stores/productStore.ts
import { defineStore } from "pinia";
import type { ProductsResponseApi } from "../interfaces/productInterface";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [] as ProductsResponseApi[],
    selectedProduct: {} as ProductsResponseApi,
  }),

  actions: {
    setProducts(products: ProductsResponseApi[]) {
      this.products = products;
    },
    setSelectedProduct(product: ProductsResponseApi) {
      this.selectedProduct = product;
    },
  },
});