"use server";
import { signIn, signOut } from "@/auth";

export const loginWithGithub = async () => {
  await signIn("github", { redirectTo: "/projects" });
};

export const loginWithFacebook = async () => {
  await signIn("facebook", { redirectTo: "/projects" });
};

export const logout = async () => {
  await signOut({ redirect: false });
};