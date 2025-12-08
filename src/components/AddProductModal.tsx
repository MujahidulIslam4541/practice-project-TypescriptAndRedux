// src/components/AddProductModal.tsx
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

// src/types.ts
export interface ProductForm {
  image: string;
  title: string;
  price: number;
  category: string;
  description: string;
}

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (product: ProductForm) => void;
}

const AddProductModal = ({ isOpen, onClose, onAdd }: AddProductModalProps) => {
  const [formData, setFormData] = useState<ProductForm>({
    image: "",
    title: "",
    price: 0,
    category: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "price" ? Number(value) : value,
    }));
  };

  const handleAdd = () => {
    if (!formData.image || !formData.title) {
      toast.error("Please provide at least a title and an image URL.");
      return;
    }

    onAdd(formData);

    setFormData({
      image: "",
      title: "",
      price: 0,
      category: "",
      description: "",
    });

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white shadow-lg rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-amber-600">
            Add New Product
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {/* Title */}
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Product Title"
            />
          </div>

          {/* Price */}
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
            />
          </div>

          {/* Category */}
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
            />
          </div>

          {/* Image URL */}
          <div className="grid gap-2">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              type="text"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Description */}
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 focus:ring-amber-500 focus:border-amber-500"
              rows={4}
              placeholder="Product description..."
            />
          </div>
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose} className="border-gray-300">
            Close
          </Button>
          <Button
            onClick={handleAdd}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            Add Product
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
