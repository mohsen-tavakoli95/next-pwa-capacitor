import { fetcher } from "@/lib/utils";
//types
import { LoginUserType } from "@/types";

export const LoginUser = (data: LoginUserType) => {
  return fetcher("signin", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
