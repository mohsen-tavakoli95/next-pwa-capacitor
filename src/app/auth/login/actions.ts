"use server";
//zod
import { z } from "zod";
//navigation
import { redirect } from "next/navigation";
//lib
import { createSession } from "@/lib/session";
//types
import { TokenType, UserType } from "@/types";
//api
import { LoginUser } from "@/apis";

const loginSchema = z.object({
  username: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .trim(),
});

const TokenSchema = z.object({
  tokenType: z.string(),
  accessToken: z.string(),
  refreshToken: z.string(),
  expiresIn: z.string(),
});

const UserSchema = z.object({
  _id: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  backupCodes: z.array(z.string()),
  status: z.string(),
  favoriteDestinations: z.array(z.unknown()), // You can replace with a more specific schema
  createdAt: z.string(),
  updatedAt: z.string(),
  id: z.string(),
});

const LoginResponseSchema = z.object({
  token: TokenSchema,
  user: UserSchema,
});

export async function login(prevState: unknown, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { username, password } = result.data;

  let success = false;

  try {
    const res = await LoginUser({ username, password });
    const parsed = LoginResponseSchema.safeParse(res);

    if (!parsed.success) {
      throw new Error("Invalid login response format");
    }

    const { token, user }: { token: TokenType; user: UserType } = parsed.data;
    await createSession(token);
    success = true;
    console.log("user", user);
  } catch (err) {
    console.log(err);
    return {
      errors: {
        username: [JSON.stringify(err)],
      },
    };
  }

  if (success) return redirect("/dashboard");
}
