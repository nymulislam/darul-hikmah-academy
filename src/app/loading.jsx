"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* 🌀 Outer Rotating Ring */}
        <div className="h-24 w-24 rounded-full border-4 border-gray-100 border-t-[#FBBF24] animate-spin"></div>
        
        {/* 🌀 Inner Reverse Rotating Ring */}
        <div className="absolute h-16 w-16 rounded-full border-4 border-gray-100 border-b-[#1A1B5F] animate-reverse-spin"></div>

        {/* 🏢 Center Pulse Dot */}
        <div className="absolute h-4 w-4 bg-[#1A1B5F] rounded-full animate-pulse"></div>
      </div>

      {/* 📝 Loading Text */}
      <div className="mt-6 text-center">
        <p className="text-[#1A1B5F] font-bold text-lg tracking-widest uppercase animate-bounce">
          Loading...
        </p>
        <p className="text-gray-400 text-xs mt-1 font-medium">
          Darul Hikmah Islamic Academy
        </p>
      </div>

      {/* 🎨 Custom CSS for Reverse Spin */}
      <style jsx global>{`
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-reverse-spin {
          animation: reverse-spin 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
}