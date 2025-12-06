
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Home, Info, Box, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-[1250px] items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        {/* Product Icon */}
        <Box className="w-6 h-6 text-blue-500" />

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100">
                  <Info className="w-4 h-4" />
                  <span>About</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Product Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100">
                <Box className="w-4 h-4" />
                <span>Product</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="md:min-w-[180px] bg-white border rounded-md shadow-md p-2">
                <NavigationMenuLink asChild>
                  <Link to="/product/product1" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                    Product 1
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/product/product2" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                    Product 2
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right side */}
      <div>
        <Button variant="outline" className="flex items-center space-x-1">
          <LogIn className="w-4 h-4" />
          <Link to='/signIn'>Sign In</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
