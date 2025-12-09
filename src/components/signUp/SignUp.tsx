import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chrome, Mail, Lock, ArrowRight, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    toast.success("Account Created Successfully! 🎉");
    console.log("user registation successfully", formData);
    setTimeout(() => {
      navigate("/signIn");
    }, 1200);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">Sign up to get started with us</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="pt-6 space-y-5">
            {/* Name */}
            <div>
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full h-12 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold"
            >
              Create Account <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </CardContent>

          <CardFooter className="flex justify-center pb-6">
            <p className="text-sm">
              Already have an account?
              <Link
                to="/signIn"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
