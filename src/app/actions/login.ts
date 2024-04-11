"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { randomInt } from "../_utils/randomInt";

export async function login(formData: FormData) {
  // unused because for demo only
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(rawFormData);
  cookies().set("authorised", randomInt().toString());
  redirect("/");
}
