import { UserType } from "@/types";

export type LoginUserType = {
  username: string;
  password: string;
};

export type TokenType = {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
};

export type LoginResponseType = {
  token: TokenType;
  user: UserType;
};
