"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
  try {
  } catch (error) {
    console.error("Error in sign in", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { email, password, lastName, firstName } = userData;
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("my-custom-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error in sign up", error);
  }
};
