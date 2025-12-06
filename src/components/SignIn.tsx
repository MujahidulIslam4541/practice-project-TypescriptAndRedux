import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Chrome } from "lucide-react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex justify-center w-[900px] items-center min-h-screen bg-linear-to-br from-gray-100 to-gray-200 px-4">
      <Card className="w-full max-w-md shadow-2xl border border-gray-200 rounded-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Enter your email and password to sign in
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email" className="font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="h-11"
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="font-medium">
                  Password
                </Label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="h-11"
                placeholder="Password"
              />
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full h-11 text-[16px] bg-amber-200">
              Sign In
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 mt-2">
          {/* Google Login */}
          <Button
            variant="outline"
            className="w-full h-11 flex items-center justify-center gap-2 bg-amber-100 text-[15px]"
          >
            <Chrome size={20} />
            Continue with Google
          </Button>

          {/* Sign Up Text */}
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="underline font-medium text-black">
              Sign Up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
