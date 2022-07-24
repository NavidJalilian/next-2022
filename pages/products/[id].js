import React from "react";
import { useRouter } from "next/router";

export default function id() {
  const { query } = useRouter();
  return <div>product {query.id} is here</div>;
}
