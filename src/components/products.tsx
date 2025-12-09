import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { useGetProductsQuery } from "@/redux/endpoints/productApi";
import { useState, useEffect } from "react";
import type { Product } from "@/redux/endpoints/productApi";

const Products = () => {
  const { data: apiProducts, isLoading } = useGetProductsQuery();

  const [localProducts, setLocalProducts] = useState<Product[]>([]);
  const [mergedProducts, setMergedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("localProducts") || "[]");
    setLocalProducts(saved);
  }, []);

  useEffect(() => {
    const handler = () => {
      const saved = JSON.parse(localStorage.getItem("localProducts") || "[]");
      setLocalProducts(saved);
    };
    window.addEventListener("localProductsUpdated", handler);
    return () => window.removeEventListener("localProductsUpdated", handler);
  }, []);

  useEffect(() => {
    if (apiProducts) {
      const merged = [...localProducts, ...apiProducts];
      setMergedProducts(merged);
    }
  }, [apiProducts, localProducts]);

  if (isLoading) return <Loading />;

  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {mergedProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
