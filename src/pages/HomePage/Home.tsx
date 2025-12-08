// src/pages/Home.tsx
import Navbar from "@/components/Navbar";
import Products from "@/components/products";
import { Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import AddProductModal, {
  type ProductForm,
} from "@/components/AddProductModal";
import toast from "react-hot-toast";
import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";

import { useAddProductMutation } from "@/redux/endpoints/productApi";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  const [addProduct] = useAddProductMutation();

  const handleAddProduct = async (product: ProductForm): Promise<void> => {
    try {
      const result = await addProduct({
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
      }).unwrap(); 

      toast.success("Product added successfully!");
      console.log("Product added:", result);

      setModalOpen(false);
    } catch (error) {
      console.error("Add product error:", error);
      toast.error("Failed to add product! Try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-10 px-5">
        {/* Add Product Button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-200"
          >
            <Plus size={18} />
            Add Product
          </button>

          {/* Cart Icon */}
          <div className="relative">
            <Link
              to="/addToCart"
              className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow hover:shadow-lg transition-all duration-200"
            >
              <ShoppingCart className="w-6 h-6 text-amber-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Products list */}
        <Products />

        {/* Add Product Modal */}
        <AddProductModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          // onAdd={handleAddProduct}
        />
      </div>
    </div>
  );
};

export default Home;
