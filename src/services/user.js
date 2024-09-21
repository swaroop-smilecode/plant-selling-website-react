import apiFetch from "./apiFetch";

export const createUser = ( username, password ) =>
  apiFetch("POST", "/users", {
    username,
    password,
  });

// POST - /users
//   body: { username, password }