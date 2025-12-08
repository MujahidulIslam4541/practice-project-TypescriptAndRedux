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
}

const AddProductModal = ({ isOpen, onClose }: AddProductModalProps) => {
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
    if (!formData.title || !formData.image) {
      toast.error("Title & Image required!");
      return;
    }

    const newProduct = {
      ...formData,
      id: Date.now(), 
    };

    const saved = JSON.parse(localStorage.getItem("localProducts") || "[]");

    localStorage.setItem(
      "localProducts",
      JSON.stringify([newProduct, ...saved])
    );

    window.dispatchEvent(new Event("localProductsUpdated"));

    toast.success("Product added!");

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
      <DialogContent className="bg-gray-200 space-y-2">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div>
            <Label>Title</Label>
            <Input id="title" value={formData.title} onChange={handleChange} />
          </div>

          <div>
            <Label>Price</Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Category</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Image URL</Label>
            <Input id="image" value={formData.image} onChange={handleChange} />
          </div>

          <div>
            <Label>Description</Label>
            <textarea
              id="description"
              className="w-full border rounded p-2"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-amber-500" onClick={handleAdd}>
            Add Product
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
