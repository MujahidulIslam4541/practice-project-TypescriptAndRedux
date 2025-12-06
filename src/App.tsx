import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen max-w-7x mx-auto">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>

       </div>
    </Router>
  );
}
