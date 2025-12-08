import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-md w-full px-4">
        <div className="flex flex-col items-center">
          {/* Animated Spinner */}
          <div className="relative">
            {/* Outer ring */}
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-200 border-t-blue-600 border-r-purple-600"></div>

            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-400 to-purple-400 opacity-20 blur-xl animate-pulse"></div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2
                className="h-8 w-8 text-blue-600 animate-spin"
                style={{ animationDuration: "1.5s" }}
              />
            </div>
          </div>

          {/* Loading text with animation */}
          <div className="text-center mt-8 space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">
              Loading
              <span className="inline-flex ml-1">
                <span
                  className="animate-bounce"
                  style={{ animationDelay: "0ms" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce"
                  style={{ animationDelay: "150ms" }}
                >
                  .
                </span>
                <span
                  className="animate-bounce"
                  style={{ animationDelay: "300ms" }}
                >
                  .
                </span>
              </span>
            </h2>
            <p className="text-gray-600 text-sm">
              Please wait while we fetch your data
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-xs mt-6">
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-linear-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
