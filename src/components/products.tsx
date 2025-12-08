import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { useGetProductsQuery } from "@/redux/endpoints/ProductsApi";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-4 gap-8">
      {products?.map((product) => (
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
