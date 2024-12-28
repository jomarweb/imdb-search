"use client";

import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchBox from "./components/SearchBox";

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6 sm:p-12 mt-[-100px]">
     <div className="text-center font-bold text-[2rem] mb-[1rem]">Search Movies</div>
      <div className="w-full sm:w-1/2 flex">
       <SearchBox/>
      </div>
    </div>
  );
}
