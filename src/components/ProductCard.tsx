// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import type { AppDispatch } from "@/store/Store";
// import { addToCart } from "@/features/CardSlice";

// import { Info, ShoppingCart } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// interface ProductCardProps {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
// }

// const ProductCard = ({ id, title, image, price }: ProductCardProps) => {
//   const dispatch = useDispatch<AppDispatch>();

//   const handleAddToCard = () => {
//     dispatch(addToCart({ id, title, price, image }));
//     toast.success(`${title} added to cart!`);
//   };
//   return (
//     <Card className="w-full shadow flex flex-col h-full">
//       {/* Image */}
//       <CardContent className="p-0">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-52 object-cover rounded-t"
//         />
//       </CardContent>

//       {/* Title + Price */}
//       <CardHeader className="grow">
//         <CardTitle className="text-base">{title}</CardTitle>
//         <CardDescription className="text-sm">Price: ${price}</CardDescription>
//       </CardHeader>

//       {/* Buttons stay at the bottom */}
//       <CardFooter className="mt-auto">
//         <div className="flex gap-3 items-center w-full">
//           <Link
//             to={`/product/${id}`}
//             className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded w-full justify-center transition-colors duration-200"
//           >
//             <Info size={18} />
//             Details
//           </Link>

//           <button
//             onClick={handleAddToCard}
//             className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded w-full justify-center transition-colors duration-200"
//           >
//             <ShoppingCart size={18} />
//             AddToCart
//           </button>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// };

// export default ProductCard;

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import type { AppDispatch } from "@/store/Store";
import { addToCart } from "@/features/CardSlice";
import { Info, ShoppingCart, Edit, Trash2, MoreVertical } from "lucide-react";
import { useDispatch } from "react-redux";
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

  const handleAddToCard = () => {
    dispatch(addToCart({ id, title, price, image }));
    toast.success(`${title} added to cart!`);
  };

  const handleUpdateProduct = () => {
    // Add your update logic here
    toast.success("Redirecting to update page...");
    // navigate to update page or open modal
  };

  const handleDeleteProduct = () => {
    // Add your delete logic here
    toast.success(`${title} deleted successfully!`);
  };

  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border-2 border-gray-200 hover:border-blue-300 group">
      {/* Image with overlay */}
      <div className="relative overflow-hidden">
        <CardContent className="p-0">
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover rounded-t transition-transform duration-300 group-hover:scale-105"
          />
        </CardContent>

        {/* Action Menu - Top Right */}
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
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                onClick={handleUpdateProduct}
                className="cursor-pointer gap-2 text-blue-600 focus:text-blue-700 focus:bg-blue-50"
              >
                <Edit className="h-4 w-4" />
                <span>Update Product</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    className="cursor-pointer gap-2 text-red-600 focus:text-red-700 focus:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Delete Product</span>
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 border-2 border-red-200">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl text-red-900">
                      Delete Product?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-red-700">
                      Are you sure you want to delete "{title}"? This action
                      cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-white hover:bg-gray-100 text-gray-800 border-2 border-gray-300">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDeleteProduct}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Price Badge - Top Left */}
        <div className="absolute top-3 left-3">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-full shadow-lg font-bold text-sm">
            ${price}
          </div>
        </div>
      </div>

      {/* Title */}
      <CardHeader className="grow pb-3">
        <CardTitle className="text-base line-clamp-2 text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Premium Quality Product
        </CardDescription>
      </CardHeader>

      {/* Action Buttons */}
      <CardFooter className="mt-auto pt-0 pb-4">
        <div className="flex gap-2 w-full">
          <Link to={`/product/${id}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full gap-2 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200"
            >
              <Info size={16} />
              Details
            </Button>
          </Link>

          <Button
            onClick={handleAddToCard}
            className="flex-1 gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
