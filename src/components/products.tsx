import { useEffect, useState } from "react";
import ProductCard from "./Card";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string; 
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await response.json(); 
        setProducts(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="grid grid-cols-4 gap-8">
      {products.map((product) => (
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
