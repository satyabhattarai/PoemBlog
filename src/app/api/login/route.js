import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });

    const response = NextResponse.json({ message: "Login successful" });

    response.cookies.set({
      name: "authToken",
      value: token,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24, 
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
