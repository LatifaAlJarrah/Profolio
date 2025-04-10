import { db } from "./db"; // however you connect to your DB

export const getUserByEmail = async (email: string) => {
  return await db.user.findUnique({
    where: { email },
  });
};
