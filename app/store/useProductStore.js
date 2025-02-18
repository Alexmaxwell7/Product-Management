import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set) => ({
  products: [],
  categories: [],
  filteredProducts: [],
  loading: false,

  setLoading: (status) => set({ loading: status }),

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("https://dummyjson.com/products");
      set({ products: res.data.products, filteredProducts: res.data.products });
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      set({ loading: false });
    }
  },

  fetchCategories: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("https://dummyjson.com/products/categories");
      set({ categories: res.data });
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      set({ loading: false });
    }
  },

  searchProducts: async (query) => {
    set({ loading: true });
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );
      set({ filteredProducts: res.data.products });
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      set({ loading: false });
    }
  },

  fetchByCategory: async (category) => {
    set({ loading: true });
    try {
      if (category === "all") {
        set((state) => ({ filteredProducts: state.products }));
      } else {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        set({ filteredProducts: res.data.products });
      }
    } catch (error) {
      console.error("Error fetching category products:", error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductStore;
