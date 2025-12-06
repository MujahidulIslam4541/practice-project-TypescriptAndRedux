import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/Store";
import {
  fetchSingleProduct,
  deleteProduct,
  updateProduct,
  Product,
} from "@/features/ProductSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { singleProduct, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  const [formData, setFormData] = useState<Partial<Product>>({});

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(Number(id)));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (singleProduct) {
      setFormData({
        title: singleProduct.title,
        price: singleProduct.price,
        category: singleProduct.category,
        description: singleProduct.description,
      });
    }
  }, [singleProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "price" ? Number(value) : value,
    }));
  };

  const handleUpdate = () => {
    if (singleProduct) {
      dispatch(updateProduct({ ...singleProduct, ...formData } as Product));
    }
  };

  const handleDelete = () => {
    if (singleProduct) {
      dispatch(deleteProduct(singleProduct.id));
      navigate("/products");
    }
  };

  if (loading) return <h2 className="text-center mt-20">Loading...</h2>;
  if (error) return <h2 className="text-center mt-20">{error}</h2>;
  if (!singleProduct) return <h2 className="text-center mt-20">Product not found</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{singleProduct.title}</h1>

      <img
        src={singleProduct.image}
        alt={singleProduct.title}
        className="w-full max-h-96 object-contain rounded shadow"
      />

      <div className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <Input id="title" value={formData.title || ""} onChange={handleChange} />
        </div>

        <div>
          <label className="block font-medium">Price</label>
          <Input
            id="price"
            type="number"
            value={formData.price || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <Input id="category" value={formData.category || ""} onChange={handleChange} />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            id="description"
            value={formData.description || ""}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            rows={4}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700">
          Update
        </Button>
        <Button onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
          Delete
        </Button>
        <Button onClick={() => navigate("/products")} variant="outline">
          Back
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
