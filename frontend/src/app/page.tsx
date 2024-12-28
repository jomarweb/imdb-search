"use client";

import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchBox from "./components/SearchBox";

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 sm:p-12">
      <div className="w-full sm:w-1/2 flex">
       <SearchBox/>
      </div>
    </div>
  );
}
