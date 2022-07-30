import React from "react";

export default function MonthBar({ amount = 20, total = 100 }) {
  const posandage = (amount / total) * 100 + "%";
  return (
    <div className="py-4 flex justify-start" >
      <div
        className=" bar mt-8  rotate-90  
        bg-gray-200 rounded-full dark:bg-gray-700"
      >
        <div
          className="bg-purple-600 text-xs font-medium transition-transform 
            text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${posandage}` }}
        >
          {posandage}
        </div>
      </div>
      <div
        className=" bar mt-8  rotate-90  
        bg-gray-200 rounded-full dark:bg-gray-700"
      >
        <div
          className="bg-purple-600 text-xs font-medium transition-transform 
            text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${posandage}` }}
        >
          {posandage}
        </div>
      </div>
      <div
        className=" bar mt-8  rotate-90  
        bg-gray-200 rounded-full dark:bg-gray-700"
      >
        <div
          className="bg-purple-600 text-xs font-medium transition-transform 
            text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${posandage}` }}
        >
          {posandage}
        </div>
      </div>
      <div
        className=" bar mt-8  rotate-90  
        bg-gray-200 rounded-full dark:bg-gray-700"
      >
        <div
          className="bg-purple-600 text-xs font-medium transition-transform 
            text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${posandage}` }}
        >
          {posandage}
        </div>
      </div>
      <div
        className=" bar mt-8  rotate-90  
        bg-gray-200 rounded-full dark:bg-gray-700"
      >
        <div
          className="bg-purple-600 text-xs font-medium transition-transform 
            text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${posandage}` }}
        >
          {posandage}
        </div>
      </div>
    </div>
  );
}
