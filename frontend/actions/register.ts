"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import axios from "axios";

const SERVER_URL = process.env.SERVER_URL;

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } =
    validatedFields.data;

  return await axios({
    method: "POST",
    url: SERVER_URL + "/auth/register",
    data: {
      name: name,
      email: email,
      password: password,
    },
  })
    .then((data) => {
      return { success: "User created!" };
    })
    .catch((error) => {
      return { error: error.response.data.message };
    });

};
