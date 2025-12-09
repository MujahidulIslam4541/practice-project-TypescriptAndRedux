import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "@/redux/endpoints/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/redux/slices/authSclice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useUserLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await loginUser(formData).unwrap();

      dispatch(storeUserInfo(res.token));
      toast.success("Login Successful! 🎉");
      console.log("fromData", formData, "auth token", res.token);
      navigate("/");
    } catch (error) {
      toast.error("Invalid Credentials ❌");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to continue to your account</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="pt-6">
            <div className="space-y-5">
              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter Your Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full h-12 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold"
              >
                {isLoading ? "Signing In..." : "Sign In"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </CardContent>

          <CardFooter className="pb-6">
            <p className="text-center w-full text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signUp"
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign up free
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
