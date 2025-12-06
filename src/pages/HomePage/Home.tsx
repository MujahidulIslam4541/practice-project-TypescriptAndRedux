import Navbar from "@/components/Navbar";
import Products from "@/components/products";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-10">
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
