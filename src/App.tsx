import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import SingIn from "@/components/signIn/SignIn";
import ProductDetails from "@/components/ProductDetails";
import AddToCart from "./components/AddToCart";
import Error from "./pages/error/Error";
import SignUp from "./components/signUp/SignUp";
import GSAP from "./components/GSAP/Index";

export default function App() {
  return (
    <Router>
      <div className="max-w-7x mx-auto">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="/addToCart" element={<AddToCart></AddToCart>}></Route>
          <Route path="/signIn" element={<SingIn></SingIn>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/GSAP" element={<GSAP></GSAP>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
