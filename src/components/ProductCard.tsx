import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
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

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSclice";

import {
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "@/redux/endpoints/productApi";

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
  const dispatch = useDispatch();

  // RTK Query Mutations
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const [updateData, setUpdateData] = useState({
    title,
    price: price.toString(),
    image,
    category: "",
    description: "",
  });

  // ADD TO CART
  const handleAddToCard = () => {
    dispatch(addToCart({ id, title, price, image }));
    toast.success(`${title} added to cart!`);
  };

  // IMAGE PREVIEW
  const handleUpdateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewURL = URL.createObjectURL(file);

    setUpdateData((prev) => ({
      ...prev,
      image: previewURL,
    }));
  };

  // UPDATE PRODUCT (RTK QUERY)
  const handleUpdateSubmit = () => {
    const payload = {
      id,
      ...updateData,
      price: Number(updateData.price),
    };

    updateProduct(payload)
      .unwrap()
      .then(() => {
        toast.success("Product updated successfully!");
        setIsUpdateModalOpen(false);
      })
      .catch(() => toast.error("Failed to update product"));
  };

  // DELETE PRODUCT (RTK QUERY)
  const handleDelete = () => {
    deleteProduct(id)
    .unwrap()
    .then(() => toast.success("Product deleted successfully!"))
    .catch(() => toast.error("Failed to delete product"));
    console.log("product deleted",id)
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

        {/* Dropdown Menu */}
        <div className="absolute top-3 right-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="h-8 w-8 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-lg"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-48 bg-linear-to-br from-red-50 via-rose-50 to-pink-50 border-2 border-red-200"
            >
              {/* UPDATE PRODUCT */}
              <Dialog
                open={isUpdateModalOpen}
                onOpenChange={setIsUpdateModalOpen}
              >
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    onClick={() => setIsUpdateModalOpen(true)}
                    className="cursor-pointer gap-2 text-blue-600 hover:bg-gray-200"
                  >
                    <Edit className="h-4 w-4" /> Update Product
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent className="bg-white/80 backdrop-blur-xl border border-gray-300 shadow-2xl rounded-xl">
                  <DialogHeader className="text-center pb-2">
                    <DialogTitle className="text-2xl font-bold text-gray-800">
                      Edit Product
                    </DialogTitle>
                    <DialogDescription className="text-gray-500">
                      Modify product details below.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-6">
                    <img
                      src={updateData.image}
                      className="w-36 h-36 mx-auto rounded-lg shadow-md border"
                    />

                    <div className="space-y-1">
                      <Label className="font-medium text-gray-700">Title</Label>
                      <Input
                        value={updateData.title}
                        className="bg-gray-100 border-gray-300 focus:ring-2 focus:ring-black"
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            title: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="space-y-1">
                      <Label className="font-medium text-gray-700">Price</Label>
                      <Input
                        value={updateData.price}
                        type="number"
                        className="bg-gray-100 border-gray-300 focus:ring-2 focus:ring-black"
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            price: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="space-y-1">
                      <Label className="font-medium text-gray-700">Image</Label>
                      <Input
                        type="file"
                        accept="image/*"
                        className="bg-gray-100 border-gray-300"
                        onChange={handleUpdateImage}
                      />
                    </div>

                    <div className="space-y-1">
                      <Label className="font-medium text-gray-700">
                        Category
                      </Label>
                      <Input
                        value={updateData.category}
                        className="bg-gray-100 border-gray-300 focus:ring-2 focus:ring-black"
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            category: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="space-y-1">
                      <Label className="font-medium text-gray-700">
                        Description
                      </Label>
                      <Textarea
                        value={updateData.description}
                        className="bg-gray-100 border-gray-300 focus:ring-2 focus:ring-black"
                        onChange={(e) =>
                          setUpdateData({
                            ...updateData,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <DialogFooter className="flex justify-end gap-3">
                    <Button
                      variant="outline"
                      className="border-gray-400 text-gray-700 hover:bg-gray-200"
                      onClick={() => setIsUpdateModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-black text-white hover:bg-gray-800"
                      onClick={handleUpdateSubmit}
                    >
                      Save Changes
                    </Button>
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
                    <AlertDialogTitle>Delete Product?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete "{title}"?
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDelete}
                      className="bg-red-600 text-white"
                    >
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
          <div className="bg-amber-500 text-white px-3 py-1.5 rounded-full text-sm font-bold">
            ${price}
          </div>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-base line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-sm">
          Premium Quality Product
        </CardDescription>
      </CardHeader>

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
