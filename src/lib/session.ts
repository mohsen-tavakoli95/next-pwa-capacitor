import "server-only";
import { cookies } from "next/headers";
//types
import { TokenType } from "@/types";
//lib
import { encrypt, decrypt } from "./utils";

export async function createSession(token: TokenType) {
  const { expiresIn } = token;
  const cookieStore = await cookies();
  const session = await encrypt(token);

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: new Date(expiresIn),
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function getSession(): Promise<TokenType | undefined> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  if (!cookie) return undefined;

  const session = await decrypt(cookie);
  console.log("session", session);
  return session;
}
