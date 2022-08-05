import React, { useState } from "react";


export default function Expenses({ animate, date, amount, title }) {
  function unicId() {
    return Math.random().toString(4).slice(2);
  }
  return (
    <article
      key={unicId()}
      className={` p-4  text-white bg-gray-500 flex items-center
          rounded m-2 transition-transform 
          capitalize  justify-evenly   ${animate}`}
    >
      <div className="bg-gray-800 p-2 rounded-md mr-2 font-semibold">
        {date}
      </div>
      <p className="font-bold">{title}</p>
      <strong className="ml-auto mr-2 bg-purple-600 p-2 rounded-md">
        ${amount}
      </strong>
    </article>
  );
}
