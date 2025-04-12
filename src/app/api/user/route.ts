import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

// Zod schema for validation
const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have at least 8 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate body against schema
    const { email, username, password } = userSchema.parse(body);

    // Check if email already exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, error: "Email already exists" },
        { status: 409 }
      );
    }

    // Check if username already exists
    const existingUserByUsername = await db.user.findUnique({
      where: { username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, error: "Username already exists" },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create the user
    const newUser = await db.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    // Exclude the password from the response
const { password: _password, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      {
        user: userWithoutPassword,
        error: null,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return NextResponse.json(
        {
          user: null,
          error: error.errors[0]?.message || "Invalid input",
        },
        { status: 400 }
      );
    }

    console.error("Signup Error:", error);
    return NextResponse.json(
      {
        user: null,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
