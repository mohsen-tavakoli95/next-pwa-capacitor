import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { fetcherFunctionType, TokenType } from "@/types";
import { getSession } from "./session";
import { SignJWT, jwtVerify, JWTPayload } from "jose";

// const BASE_URL = "http://api.jasmincard.com/api/";

// const secretKey = process.env.NEXT_PUBLIC_SESSION_SECRET;
// const secretKey = process.env.NEXT_PUBLIC_SESSION_SECRET;
const encodedKey = new TextEncoder().encode("987676");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher: fetcherFunctionType = async (endpoint, options) => {
  console.log("options", options);
  let token: string | undefined;

  if (typeof window === "undefined") {
    const session = await getSession();
    if (session) token = session.accessToken;
  }

  const res = await fetch(`http://api.jasmincard.com/api/${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}` || "",
      ...(options?.headers || {}),
    },
    credentials: "include",
  });

  if (!res.ok) throw new Error(await res.text());

  return res.json();
};

export async function encrypt(payload: TokenType): Promise<string> {
  return new SignJWT(payload as unknown as JWTPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string): Promise<TokenType | undefined> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    // Optional: You can validate here with Zod or a manual check
    if (
      typeof payload.tokenType === "string" &&
      typeof payload.accessToken === "string" &&
      typeof payload.refreshToken === "string" &&
      typeof payload.expiresIn === "string"
    ) {
      return payload as TokenType;
    }
    return undefined;
  } catch (error) {
    console.error("Failed to decrypt session:", error);
    return undefined;
  }
}
