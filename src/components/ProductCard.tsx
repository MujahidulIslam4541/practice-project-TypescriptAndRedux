import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Info, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductCard = ({ id, title, image, price }: ProductCardProps) => {
  return (
    <Card className="w-full shadow flex flex-col h-full">
      {/* Image */}
      <CardContent className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-t"
        />
      </CardContent>

      {/* Title + Price */}
      <CardHeader className="grow">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-sm">Price: ${price}</CardDescription>
      </CardHeader>

      {/* Buttons stay at the bottom */}
      <CardFooter className="mt-auto">
        <div className="flex gap-3 items-center w-full">
          <Link
            to={`/product/${id}`}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded w-full justify-center transition-colors duration-200"
          >
            <Info size={18} />
            Details
          </Link>

          <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded w-full justify-center transition-colors duration-200">
            <ShoppingCart size={18} />
            AddToCart
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
