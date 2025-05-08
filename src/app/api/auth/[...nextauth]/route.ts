
// src/app/api/auth/[...nextauth]/route.ts

import { handlers } from "@/auth";

/**
 * Handles authentication requests for NextAuth.
 * Supports both GET and POST methods as required by NextAuth.
 */
export const { GET, POST } = handlers;