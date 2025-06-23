import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-24 h-24">
        {/* Outer Neon Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-lg animate-spin"></div>

        {/* Inner Circle with Spinner */}
        <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
