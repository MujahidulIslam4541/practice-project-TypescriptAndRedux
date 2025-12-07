import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "@/features/ProductSlice";
import type { AppDispatch, RootState } from "@/store/Store";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Loading from "./Loading";
import { ShoppingCart } from "lucide-react";

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

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back Button */}
      <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
        ← Back
      </Button>

      <Card className="shadow-lg rounded-xl">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="flex justify-center items-start">
            <img
              src={singleProduct?.image}
              alt={singleProduct?.title}
              className="rounded-xl shadow-md w-full max-w-sm object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{singleProduct?.title}</h1>

            <p className="text-muted-foreground">
              {singleProduct?.description}
            </p>

            <div className="flex items-center gap-6">
              <p className="text-2xl font-semibold">${singleProduct?.price}</p>

              {/* Tag Example (optional) */}
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm">
                {singleProduct?.category}
              </span>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 focus:ring-2 focus:ring-amber-400 focus:outline-none text-white font-semibold rounded-lg shadow-md transition-all duration-200">
                <ShoppingCart size={18} />
                AddtoCart
              </button>

              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none text-white font-semibold rounded-lg shadow-md transition-all duration-200">
                <ShoppingCart size={18} />
                Update Product
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
