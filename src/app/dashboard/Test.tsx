"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { logout } from "./actions";

export function LoginForm() {
  const [, loginAction] = useActionState(logout, undefined);

  return (
    <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? "Loading" : "Logout"}
    </button>
  );
}
