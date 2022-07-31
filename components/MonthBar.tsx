import React from "react";

export default function MonthBar({
  amount,
  month,
  totalInYear,
}: {
  amount: number;
  month: string;
  totalInYear: number;
}) {

  const posandage =
    amount === 0 ? "0" : (( +amount / totalInYear) * 100).toFixed();
  return (
    <div className="">
      <div
        className="month-bar w-4 bg-gray-700 bar mt-4 ml-2 
        rounded relative "
        title={`${amount}`}
      >
        <div
          className="bar-indicator absolute top-0 bg-purple-500
            trasisition-all duration-500 ease-in-out text-xs text-center
            max-h-full
         w-full rounded "
          style={{
            height: `${posandage}%`,
          }}
        >
          <span className="text-white">
            {" "}
            {posandage === "0" ? "" : posandage + "%"}
          </span>
        </div>
      </div>
      <span className="text-white capitalize text-xs ml-2">{month}</span>
    </div>
  );
}
