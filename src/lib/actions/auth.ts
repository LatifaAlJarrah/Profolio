"use server";
import { signIn, signOut } from "@/auth";


export const loginWithGithub = async () => {
  await signIn("github", { redirectTo: "/projects" });
};

export const loginWithFacebook = async () => {
  await signIn("facebook", { redirectTo: "/projects" });
};

// export const loginWithUsernameAndPassword = async (
//   email: string,
//   password: string
// ) => {
//   const result = await signIn("credentials", {
//     email,
//     password,
//     redirect: false,
//   });

  
//   if (result?.error) {
//     // Parse custom errors
//     if (result.error.startsWith("AUTH_ERROR:")) {
//       throw new Error(result.error.replace("AUTH_ERROR:", ""));
//     }
//     throw new Error("Something went wrong");
//   }

//   return result;
// };

// export const loginWithUsernameAndPassword = async(
//   email: string,
//   password: string
// ) => {
//   const result = await signIn("credentials", {
//     email,
//     password,
//     redirect: false,
//   });

//   if (result?.error) {
//     throw new Error(result.error);
//   }

//   return result;
// }

export const logout = async () => {
  await signOut({ redirect: false }); // Disable NextAuth's automatic redirect
};