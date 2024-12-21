import { NextRequest, NextResponse } from "next/server";

const books = [
  { id: 1, Name: "Maths", author: "Hamzah" },
  {
    id: 2,
    Name: "Science",
  },
];

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const data = await params;

  return NextResponse.json({ message: data.id });
}
