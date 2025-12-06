import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/hooks/Hook";
import { fetchProducts, deleteProduct } from "@/features/ProductSlice";

const Products = () => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="grid grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        //   onDelete={() => dispatch(deleteProduct(product.id))}
        />
      ))}
    </div>
  );
};

export default Products;
