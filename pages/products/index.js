import Link from "next/link";
import { useState } from "react";

export default function index() {
  const [value, setValue] = useState(0);
  return (
    <div>
      index
      <br />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <Link href={"/products/" + value}>to products id</Link>
    </div>
  );
}
