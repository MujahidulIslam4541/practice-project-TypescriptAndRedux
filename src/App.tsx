import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import SingIn from "@/components/SignIn";
import ProductDetails from "@/components/ProductDetails";

export default function App() {
  return (
    <Router>
      <div className="flex  max-w-7x mx-auto">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
          <Route path="/signIn" element={<SingIn></SingIn>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
