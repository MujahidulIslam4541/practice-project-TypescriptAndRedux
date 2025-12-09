import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useAppDispatch } from "@/redux/hooks";
import { removeUserInfo } from "@/redux/slices/authSclice";
import type { RootState } from "@/redux/store";
import { Box, LogIn, LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(removeUserInfo());
  };
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo & Nav */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <Box className="w-5 h-5 text-gray-900 group-hover:text-blue-600 transition-colors" />
              <span className="font-semibold text-lg text-gray-900">Brand</span>
            </a>

            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a
                      href="/"
                      className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/GSAP"
                      className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      GSAP
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Product Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent transition-colors">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[200px] bg-white border border-gray-100 rounded-lg shadow-lg p-2 mt-2">
                    <NavigationMenuLink asChild>
                      <a
                        href="/product/product1"
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        Product 1
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a
                        href="/product/product2"
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        Product 2
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {token ? (
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">SignOut</span>
            </Button>
          ) : (
            <Link to="/signIn">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span className="text-sm font-medium">Sign In</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
