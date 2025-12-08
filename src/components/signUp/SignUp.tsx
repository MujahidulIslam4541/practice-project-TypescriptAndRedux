import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chrome, Mail, Lock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("SignUp Data:", formData);
    setMessage("Account Created Successfully! 🎉");
    setTimeout(() => {
      setMessage("");
      // navigate('/signin')
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      {message && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {message}
        </div>
      )}

      <div className="w-full max-w-md">
        {/* Header Text */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">Sign up to get started with us</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="pt-6">
            <div className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-11 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-11 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-11 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Sign Up Button */}
              <Button
                onClick={handleSubmit}
                className="w-full h-12 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Create Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 pb-6">
            {/* Divider */}
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            {/* Google Sign Up */}
            <Button
              variant="outline"
              className="w-full h-12 flex items-center justify-center gap-3 border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Chrome className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Continue with Google</span>
            </Button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
               to='/signIn'
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-8">
          Protected by reCAPTCHA and subject to the Google{" "}
          <a href="#" className="underline hover:text-gray-700">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-gray-700">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
