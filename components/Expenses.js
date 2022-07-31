import React, { useState } from "react";

export default function Expenses({expenses}) {
  function unicId() {
    return Math.random().toString(2).substr(2, 9);
  }
  return (
    <div className="mt-10 ">
      {expenses.map((i) => (
        <article
          key={unicId()}
          className="date p-4 text-white bg-gray-500 flex items-center
          rounded m-2
          capitalize  justify-evenly"
        >
          <div className="bg-gray-800 p-2 rounded-md mr-2 font-semibold">
            {i.date}
          </div>
          <p className="font-bold">{i.title}</p>
          <strong className="ml-auto mr-2 bg-purple-600 p-2 rounded-md">${i.amount}</strong>
        </article>
      ))}
    </div>
  );
}
