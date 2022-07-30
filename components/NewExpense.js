import { useState } from "react";

export default function NewExpense() {
  const [data, setData] = useState({
    title: "",
    date: "",
    amount: 0,
  });
  function chnageHandler(e) {
    if (e.target.name === "title")
      setData((state) => ({ ...state, title: e.target.value }));
    else if (e.target.name === "date")
      setData((state) => ({ ...state, date: e.target.value }));
    else setData((state) => ({ ...state, amount: e.target.value }));
  }
  return (
    <form
      className="bg-purple-400 p-4  rounded-md pt-4 flex flex-wrap
      gap-y-4
       justify-center lg:justify-around 
     "
    >
      <div className="max-w-lg basis-3/5">
        <label htmlFor="date" className="font-semibold inline-block ">
          Title
        </label>
        <input
          value={data.title}
          onChange={chnageHandler}
          type="text"
          name="title"
          id=""
          className="block w-full rounded px-2 outline-none"
        />
      </div>
      <div className="max-w-lg basis-3/5">
        <label htmlFor="date" className="font-semibold inline-block ">
          Date
        </label>
        <input
          onChange={chnageHandler}
          value={data.date}
          type="date"
          name="date"
          id=""
          className="block w-full rounded px-2 outline-none"
        />
      </div>

      <div className="max-w-lg basis-3/5 self-start">
        <label htmlFor="amount" className="font-semibold inline-block">
          Amount
        </label>
        <input
          onChange={chnageHandler}
          value={data.amount}
          min="0"
          type="number"
          name="amount"
          id=""
          className="block w-full outline-none rounded px-2"
        />
        <button
          className="text-center mt-2 rounded-sm bg-gray-600 py-2 px-4
            inline-block
         text-white"
        >
          Add
        </button>
      </div>
    </form>
  );
}
