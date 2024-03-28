"use server";

import { FormDataSchemaLogin, FormDataSchemaSignUp } from "./schema";

// For Login
export async function getEntry(state, formData) {
  const result = FormDataSchemaLogin.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (result.success) {
    console.log("User Logged In", result);
    return { formData: result.data };
  }

  // TODO: perform desired action / mutation

  if (result.error) {
    return { error: result.error.format() };
  }
}

// For Sign up
export async function addEntry(state, formData) {
  const result = FormDataSchemaSignUp.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (result.success) {
    console.log("User Signed Up", result);
    return { formData: result.data };
  }

  // TODO: perform desired action / mutation

  if (result.error) {
    return { error: result.error.format() };
  }
}
