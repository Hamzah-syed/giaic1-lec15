import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json([
    { id: 1, Name: "Maths", author: "Hamzah" },
    {
      id: 2,
      Name: "Science",
      author: "ali",
    },
  ]);
};


export const POST = () => {

// database connection
// insert data

  return NextResponse.json({ message: "Success" });
};
