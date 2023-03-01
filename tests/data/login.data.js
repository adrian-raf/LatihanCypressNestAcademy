import * as generator from "@helper/generator";

export const INVALID_LOGIN_DATA = {
  // username: "invalid_username",
  // password: "invalid_password"

  username: generator.username(),
  password: generator.password()
};

export const VALID_LOGIN_DATA = {
  username: "standard_user",
  password: "secret_sauce"
};
