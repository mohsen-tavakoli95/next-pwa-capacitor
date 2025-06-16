import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { fetcherFunctionType } from "@/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE || "https://jsonplaceholder.typicode.com";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher: fetcherFunctionType = async (endpoint, options) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${123}`,
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) throw new Error(await res.text());

  return res.json();
};
