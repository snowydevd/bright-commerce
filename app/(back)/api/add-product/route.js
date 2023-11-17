import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pName = searchParams.get("pName");
  const pStock = searchParams.get("pStock");
  const pSizes = searchParams.get("pSizes");
  const pPhoto = searchParams.get("pPhoto");

  try {
    if (!pName || !pStock || !pSizes || !pPhoto)
      throw new Error("Products are required");

    await sql`INSERT INTO Products (stock, name, sizes, photo) VALUES (${pName}, ${pStock}, ${pSizes}, ${pPhoto});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products = await sql`SELECT * FROM Products;`;
  return NextResponse.json({ products }, { status: 200 });
}
