"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import {  House, ArrowLeft } from "@gravity-ui/icons";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-3xl w-full text-center">
        
        {/* 🎨 Visual Area */}
        <div className="relative mb-12">
          {/* Big Background Text */}
          <h1 className="text-[140px] md:text-[220px] font-black text-[#1A1B5F]/5 leading-none select-none">
            404
          </h1>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
             <div className="bg-white p-4 rounded-2xl shadow-2xl shadow-[#1A1B5F]/10 border border-gray-50 transform -rotate-2">
                <Image 
                    src="/academy-logo.png" 
                    alt="Darul Hikmah Logo" 
                    width={180} 
                    height={60} 
                    className="h-10 md:h-12 w-auto"
                />
             </div>
             <div className="bg-[#FBBF24] text-[#1A1B5F] px-4 py-1 rounded-full text-sm font-bold tracking-tighter uppercase shadow-lg shadow-[#FBBF24]/30">
                Page Not Found
             </div>
          </div>
        </div>

        {/* 📝 Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1B5F] tracking-tight">
            Lost in the Quest for Knowledge?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* 🔘 Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button 
              size="lg"
              className="bg-[#1A1B5F] text-white font-bold hover:bg-[#1A1B5F]/90 shadow-2xl shadow-[#1A1B5F]/20 transition-all active:scale-95"
              startContent={<House className="size-5" />}
              radius="full"
            >
              Back to Home
            </Button>
          </Link>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="border-gray-200 text-gray-600 font-semibold  hover:bg-gray-50 transition-all"
            startContent={<ArrowLeft className="size-5" />}
            radius="full"
          >
            Previous Page
          </Button>
        </div>

        {/* ℹ️ Footer Note */}
        <p className="mt-16 text-gray-400 text-sm font-medium">
          If you think this is a mistake, please <Link href="/contact" className="text-secondary hover:underline">Contact Support</Link>
        </p>
      </div>
    </div>
  );
}