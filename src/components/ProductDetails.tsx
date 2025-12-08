import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "@/features/ProductSlice";
import type { AppDispatch, RootState } from "@/redux/store";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Loading from "./Loading";
import { ShoppingCart, ArrowLeft,  Package, Truck, Shield } from "lucide-react";
import toast from "react-hot-toast";
import { addToCart } from "@/features/CardSlice";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { singleProduct, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) return <Loading></Loading>;
  if (error) return <h2 className="text-center mt-20">{error}</h2>;
  if (!singleProduct) return null;

  const handleAddToCard = () => {
    dispatch(
      addToCart({
        id: singleProduct.id,
        title: singleProduct.title,
        price: singleProduct.price,
        image: singleProduct.image,
      })
    );

    toast.success(`${singleProduct.title} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-6 gap-2 border-2 border-gray-300 hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Product Image */}
          <Card className="shadow-2xl border-2 border-gray-200 overflow-hidden">
            <CardContent className="p-8 bg-white">
              <div className="relative">
                <img
                  src={singleProduct?.image}
                  alt={singleProduct?.title}
                  className="rounded-xl w-full h-[500px] object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            <Card className="shadow-2xl border-2 border-blue-200">
              <CardContent className="p-8 space-y-6">
                {/* Category Badge */}
                <Badge className="bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-1.5">
                  {singleProduct?.category}
                </Badge>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                  {singleProduct?.title}
                </h1>

                <Separator className="bg-gray-200" />

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {singleProduct?.description}
                  </p>
                </div>

                <Separator className="bg-gray-200" />

                {/* Price */}
                <div className="bg-linear-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Price</p>
                  <p className="text-5xl font-bold text-green-700">
                    ${singleProduct?.price}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCard}
                  className="w-full gap-2 py-6 text-lg font-semibold bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-200"
                  size="lg"
                >
                  <ShoppingCart size={24} />
                  Add to Cart
                </Button>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <Package className="mx-auto mb-2 text-blue-600" size={24} />
                    <p className="text-xs text-gray-700 font-medium">
                      Free Returns
                    </p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <Truck className="mx-auto mb-2 text-green-600" size={24} />
                    <p className="text-xs text-gray-700 font-medium">
                      Fast Delivery
                    </p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <Shield className="mx-auto mb-2 text-purple-600" size={24} />
                    <p className="text-xs text-gray-700 font-medium">
                      Secure Payment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
