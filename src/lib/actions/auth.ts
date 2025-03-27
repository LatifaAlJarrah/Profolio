"use server";
import { signIn, signOut } from "@/auth";

export const loginWithGithub = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const loginWithFacebook = async () => {
  await signIn("facebook", { redirectTo: "/" });
};

// // Keep the basic logout function
// export const logout = async () => {
//   await signOut({ redirectTo: "/" });
// };
export const logout = async () => {
  await signOut();
};
