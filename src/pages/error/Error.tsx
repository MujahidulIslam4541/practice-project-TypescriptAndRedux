import { Home, RefreshCw, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Error = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}
        <div className="">
          {/* Icon Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Animated Background Circles */}
              <div className="absolute inset-0 animate-ping opacity-20">
                <div className="w-32 h-32 bg-red-500 rounded-full"></div>
              </div>
              
              {/* Main Icon Container */}
              <div className="relative bg-linear-to-br from-red-500 to-orange-500 w-32 h-32 rounded-full flex items-center justify-center shadow-xl">
                <AlertTriangle className="w-16 h-16 text-white animate-pulse" strokeWidth={2.5} />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>

          {/* Error Code */}
          <div className="text-center mb-6">
            <h1 className="text-8xl md:text-9xl font-black bg-linear-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
              404
            </h1>
            <div className="h-1 w-32 bg-linear-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
          </div>

          {/* Additional Info */}
          <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-2xl p-6 mb-8 border border-red-100">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              What might have happened?
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>The page might have been removed or renamed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>The URL might have been mistyped</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>The link you clicked might be broken</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-linear-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all gap-2 group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Go Home
            </Button>

            {/* <Button
              onClick={handleGoBack}
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 font-semibold px-8 py-6 text-lg gap-2 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button> */}

            <Button
              onClick={handleRefresh}
              variant="outline"
              className="border-2 border-orange-300 hover:border-orange-400 hover:bg-orange-50 font-semibold px-8 py-6 text-lg gap-2 group text-orange-600"
            >
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Refresh
            </Button>
          </div>

          {/* Help Text */}
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Need help? Contact our{" "}
              <button className="text-orange-600 font-semibold hover:text-orange-700 underline">
                support team
              </button>
            </p>
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="fixed top-10 left-10 w-20 h-20 bg-red-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="fixed bottom-10 right-10 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-bounce delay-300"></div>
        <div className="fixed top-1/2 left-10 w-12 h-12 bg-yellow-200 rounded-full opacity-30 animate-bounce delay-500"></div>
      </div>
    </div>
  );
};

export default Error;