import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductState {
  products: Product[];
  singleProduct: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  singleProduct: null,
  loading: false,
  error: null,
};

// GET ALL PRODUCTS
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return (await res.json()) as Product[];
  }
);

// GET SINGLE PRODUCT
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id: number) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return (await res.json()) as Product;
  }
);

// DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

// UPDATE PRODUCT
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: Product) => {
    const res = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    return (await res.json()) as Product;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch all products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      })

      // fetch single product
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleProduct = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product";
      })

      // delete product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (p) => p.id !== action.payload
        );
        if (state.singleProduct?.id === action.payload) {
          state.singleProduct = null;
        }
      })

      // update product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.products = state.products.map((p) =>
          p.id === updatedProduct.id ? updatedProduct : p
        );
        if (state.singleProduct?.id === updatedProduct.id) {
          state.singleProduct = updatedProduct;
        }
      });
  },
});


export default productsSlice.reducer;
