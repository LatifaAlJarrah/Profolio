"use server";
import { signIn, signOut } from "@/auth";

export const loginWithGithub = async () => {
  await signIn("github", { redirectTo: "/" });

};

export const loginWithFacebook = async () => {
  await signIn("facebook", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirect: false }); // Disable NextAuth's automatic redirect
};