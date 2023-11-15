import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const client = sql.connect();
  try {
    const result =
      await client.sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    const names = ["Marcelo", "Juan"];
    await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pets = await client.sql`SELECT * FROM Pets;`;
  return response.status(200).json({ pets });
}
