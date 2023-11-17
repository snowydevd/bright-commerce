import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const result =
      await sql`CREATE TABLE Products (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT FULL, sizes varchar(255), photo varchar(255));`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
