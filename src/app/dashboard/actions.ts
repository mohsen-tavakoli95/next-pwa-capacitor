"use server";
import { deleteSession } from "@/lib/session";
//navigation
import { redirect } from "next/navigation";

export async function logout() {
  await deleteSession();
  redirect("/auth/login");
}
