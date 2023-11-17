import React from "react";
import { sql } from "@vercel/postgres";

export default function Catalogue() {
  const pets = sql`SELECT * FROM Pets`;
  return <div>a</div>;
}
