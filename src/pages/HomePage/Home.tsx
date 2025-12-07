// src/pages/Home.tsx
import Navbar from "@/components/Navbar";
import Products from "@/components/products";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddProductModal, { type ProductForm } from "@/components/AddProductModal";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/hooks/Hook"
import { addProduct } from "@/features/ProductSlice";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddProduct = async (product: ProductForm): Promise<void> => {
    try {
      // Dispatch addProduct thunk
      const resultAction = await dispatch(
        addProduct({
          title: product.title,
          price: product.price,
          category: product.category,
          description: product.description,
          image: product.image,
        })
      );

      // Check if fulfilled
      if (addProduct.fulfilled.match(resultAction)) {
        toast.success("Product added successfully!");
        console.log("Product added successfully:", resultAction.payload);
      } else {
        toast.error("Failed to add product!");
      }

      setModalOpen(false);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product. Try again!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-10 px-5">
        {/* Add Product Button */}
        <div className="mb-6 flex justify-start">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

        {/* Products list */}
        <Products />

        {/* Add Product Modal */}
        <AddProductModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onAdd={handleAddProduct}
        />
      </div>
    </div>
  );
};

export default Home;
