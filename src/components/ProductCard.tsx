import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/CardSlice";
import { deleteProduct, updateProduct } from "@/features/ProductSlice";

import { Edit, Trash2, Info, ShoppingCart, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductCard = ({ id, title, image, price }: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  // Update Form Data
  const [updateData, setUpdateData] = useState({
    title,
    price: price.toString(),
    image,
    category: "",
    description: "",
  });

  // Handle Add to Cart
  const handleAddToCard = () => {
    dispatch(addToCart({ id, title, price, image }));
    toast.success(`${title} added to cart!`);
  };

  // Open update modal
  const handleUpdateProduct = () => {
    setIsUpdateModalOpen(true);
  };

  // File Input → Image Preview
  const handleUpdateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewURL = URL.createObjectURL(file);

    setUpdateData((prev) => ({
      ...prev,
      image: previewURL,
    }));
  };

  // Submit Updated Product
  const handleUpdateSubmit = () => {
    const updatedProduct = {
      id,
      title: updateData.title,
      price: Number(updateData.price),
      image: updateData.image,
      category: updateData.category,
      description: updateData.description,
    };

    dispatch(updateProduct(updatedProduct))
      .unwrap()
      .then(() => {
        toast.success("Product updated successfully!");
        setIsUpdateModalOpen(false);
      })
      .catch(() => {
        toast.error("Failed to update product");
      });
  };

  // Delete Product
  const handleDelete = () => {
    dispatch(deleteProduct(id))
      .unwrap()
      .then(() => {
        toast.success("Product deleted successfully!");
      })
      .catch(() => {
        toast.error("Failed to delete product");
      });
  };

  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border-2 border-gray-200 hover:border-blue-300 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <CardContent className="p-0">
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover rounded-t transition-transform duration-300 group-hover:scale-105"
          />
        </CardContent>

        {/* Dropdown Menu (Edit + Delete) */}
        <div className="absolute top-3 right-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="h-8 w-8 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-lg backdrop-blur-sm"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48 bg-red-300 border-none">
              {/* Update Product */}
              <Dialog
                open={isUpdateModalOpen}
                onOpenChange={setIsUpdateModalOpen}
              >
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    onClick={handleUpdateProduct}
                    className="cursor-pointer gap-2 text-blue-600 focus:text-blue-700 hover:bg-gray-200"
                  >
                    <Edit className="h-4 w-4" /> Update Product
                  </DropdownMenuItem>
                </DialogTrigger>

                {/* UPDATE MODAL CONTENT */}
                <DialogContent className="sm:max-w-[550px] bg-white border">
                  <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                    <DialogDescription>
                      Modify your product details below.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                    {/* Preview */}
                    <div className="flex justify-center">
                      <img
                        src={updateData.image}
                        className="w-32 h-32 object-cover rounded-md shadow"
                      />
                    </div>

                    {/* Title */}
                    <div className="grid gap-2">
                      <Label>Title</Label>
                      <Input
                        value={updateData.title}
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            title: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Price */}
                    <div className="grid gap-2">
                      <Label>Price</Label>
                      <Input
                        type="number"
                        value={updateData.price}
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            price: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Image Upload */}
                    <div className="grid gap-2">
                      <Label>Product Image</Label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleUpdateImage}
                      />
                    </div>

                    {/* Category */}
                    <div className="grid gap-2">
                      <Label>Category</Label>
                      <Input
                        value={updateData.category}
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            category: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Description */}
                    <div className="grid gap-2">
                      <Label>Description</Label>
                      <Textarea
                        value={updateData.description}
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsUpdateModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleUpdateSubmit}>Save Changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <DropdownMenuSeparator />

              {/* DELETE PRODUCT */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    className="cursor-pointer gap-2 text-red-600 hover:bg-gray-200"
                  >
                    <Trash2 className="h-4 w-4" /> Delete Product
                  </DropdownMenuItem>
                </AlertDialogTrigger>

                <AlertDialogContent className="bg-linear-to-br from-red-50 via-rose-50 to-pink-50 border-2 border-red-200">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl text-red-900">Delete Product?</AlertDialogTitle>
                    <AlertDialogDescription className="text-red-700">
                      Are you sure you want to delete "{title}"?
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-white hover:bg-gray-100 text-gray-800 border-2 border-gray-300">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white" onClick={handleDelete}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Price Badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-amber-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow">
            ${price}
          </div>
        </div>
      </div>

      {/* Title */}
      <CardHeader className="grow pb-3">
        <CardTitle className="text-base line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-sm">
          Premium Quality Product
        </CardDescription>
      </CardHeader>

      {/* Action Buttons */}
      <CardFooter>
        <div className="flex gap-2 w-full">
          <Link to={`/product/${id}`} className="flex-1">
            <Button variant="outline" className="w-full gap-2">
              <Info size={16} /> Details
            </Button>
          </Link>

          <Button
            onClick={handleAddToCard}
            className="flex-1 gap-2 bg-amber-500 text-white"
          >
            <ShoppingCart size={16} /> Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
