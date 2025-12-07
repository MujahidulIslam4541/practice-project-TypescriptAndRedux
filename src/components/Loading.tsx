// loading.tsx

import { SplinePointer } from "lucide-react";


const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-4">
        <SplinePointer className="h-16 w-16 text-blue-500" />
      </div>

      {/* Loading text */}
      <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
      <p className="text-gray-500 mt-2">Please wait while we fetch your data.</p>
    </div>
  );
};

export default Loading;
