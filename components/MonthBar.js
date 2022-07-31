import React from "react";

export default function MonthBar({ posandage = 0, month }) {
  return (
    <div className="">
      <div
        className="month-bar w-4 bg-gray-700 bar mt-4 ml-2 
        rounded relative "
      >
        <div
          className="bar-indicator absolute top-0 bg-purple-500
            trasisition-all duration-500 ease-in-out text-xs text-center
            max-h-full
         w-full rounded"
          style={{ height: `${posandage}%` }}
        >
          {posandage}%
        </div>
      </div>
      <span className="text-white capitalize text-xs ml-2">{month}</span>
    </div>
  );
}
