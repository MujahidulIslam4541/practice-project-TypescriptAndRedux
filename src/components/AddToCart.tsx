import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, ShoppingCart, Package, Home } from "lucide-react";
import type { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "@/features/CardSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart!");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart cleared!");
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <Button
          onClick={() => navigate("/")}
          className="gap-2 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
        >
          <Home className="h-4 w-4" />
          Go to Home
        </Button>
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          {cartItems.length > 0 && (
            <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </Badge>
          )}
        </div>
      </div>

      {cartItems.length === 0 ? (
        <Card className="text-center py-16 border-2 border-blue-200 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
          <CardContent className="pt-6">
            <Package className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">Add some items to get started!</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 border-b-2 border-blue-100">
                <CardTitle className="text-xl text-blue-900">
                  Cart Items
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Review your items before checkout
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="w-20 font-semibold text-gray-700">
                        Image
                      </TableHead>
                      <TableHead className="font-semibold text-gray-700">
                        Product
                      </TableHead>
                      <TableHead className="text-right font-semibold text-gray-700">
                        Price
                      </TableHead>
                      <TableHead className="text-center font-semibold text-gray-700">
                        Qty
                      </TableHead>
                      <TableHead className="text-right font-semibold text-gray-700">
                        Total
                      </TableHead>
                      <TableHead className="w-20"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow
                        key={item.id}
                        className="hover:bg-blue-50 transition-colors"
                      >
                        <TableCell>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded-md border-2 border-gray-200 shadow-sm"
                          />
                        </TableCell>
                        <TableCell className="font-medium text-gray-800">
                          {item.title}
                        </TableCell>
                        <TableCell className="text-right text-gray-700">
                          ${item.price?.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge className="bg-blue-100 text-blue-800 border border-blue-300">
                            {item.quantity}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-semibold text-gray-900">
                          ${(item.price * item.quantity)?.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-100 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-linear-to-br from-red-50 via-rose-50 to-pink-50 border-2 border-red-200">
                              <AlertDialogHeader>
                                <AlertDialogTitle className="text-xl text-red-900">
                                  Remove item?
                                </AlertDialogTitle>
                                <AlertDialogDescription className="text-red-700">
                                  Are you sure you want to remove this item from
                                  your cart?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="bg-white hover:bg-gray-100 text-gray-800 border-2 border-gray-300">
                                  Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleRemove(item.id)}
                                  className="bg-red-600 hover:bg-red-700 text-white"
                                >
                                  Remove
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between border-t-2 border-gray-200 pt-6 bg-gray-50">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="gap-2 bg-white border-2 border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-400 transition-colors">
                      <Trash2 className="h-4 w-4" />
                      Clear Cart
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-linear-to-br from-orange-50 via-red-50 to-rose-100 border-2 border-orange-300">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-xl text-red-900">
                        Clear entire cart?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-red-700">
                        This will remove all items from your cart. This action
                        cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-white hover:bg-gray-100 text-gray-800 border-2 border-gray-300">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleClearCart}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Clear Cart
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6 border-2 border-blue-200 shadow-lg">
              <CardHeader className="bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 border-b-2 border-blue-100">
                <CardTitle className="text-xl text-blue-900">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    ${calculateSubtotal()?.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">Tax (10%)</span>
                  <span className="font-semibold text-gray-900">
                    ${calculateTax()?.toFixed(2)}
                  </span>
                </div>
                <Separator className="bg-blue-200 h-0.5" />
                <div className="flex justify-between text-lg font-bold bg-blue-50 p-3 rounded-lg">
                  <span className="text-blue-900">Total</span>
                  <span className="text-blue-900">
                    ${calculateTotal()?.toFixed(2)}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 bg-gray-50 border-t-2 border-gray-200">
                <Button
                  className="w-full bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold shadow-md"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
                <Button className="w-full bg-white border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 font-medium transition-colors">
                  Continue Shopping
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
