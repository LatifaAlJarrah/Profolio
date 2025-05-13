// src/app/auth/signup/page.tsx
"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useError } from "@/app/context/ErrorContext";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import FacebookSignInButton from "@/app/components/FacebookSignInButton";
import SignInButton from "@/app/components/SignInButton";
import Logo from "@/app/components/logo/Logo";

const FormSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const checkEmailExists = async (email: string): Promise<boolean> => {
  const response = await fetch(
    `/api/user/check-email?email=${encodeURIComponent(email)}`
  );
  if (!response.ok) throw new Error("Failed to check email");
  const { exists } = await response.json();
  return exists;
};

const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type.Device: Your device is not supported at this time.":
        "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Registration failed");
  }
  return response;
};

export default function SignUpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setErrorMessage } = useError();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    const error = searchParams.get("error");
    if (error === "email_exists") {
      setErrorMessage("This email is already registered. Please sign in.");
    }
  }, [searchParams, setErrorMessage]);

  const handleEmailBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (!email || form.formState.errors.email) return;
    const exists = await checkEmailExists(email);
    if (exists) {
      form.setError("email", { message: "This email is already registered" });
    }
  };

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      await registerUser({
        username: values.username,
        email: values.email,
        password: values.password,
      });
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/projects",
      });
      router.push("/projects");
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Registration failed";
        setErrorMessage(message);
      }
  };

  const handleSocialSignIn = async (provider: "google" | "facebook") => {
    await signIn(provider, { callbackUrl: "/projects" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Logo />
          <h2 className="text-sm font-normal my-4 text-charcoalGray">
            Sign up to create your projects
          </h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }: { field: { value: string } }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe"
                      {...field}
                      autoComplete="username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }: { field: { value: string } }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="mail@example.com"
                      type="email"
                      {...field}
                      onBlur={handleEmailBlur}
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }: { field: { value: string } }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      autoComplete="new-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }: { field: { value: string } }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                      autoComplete="new-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SignInButton disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Signing Up..." : "Sign Up"}
            </SignInButton>
          </form>
        </Form>
        <div className="my-4 flex items-center justify-evenly before:h-px before:flex-grow before:bg-stone-400 after:h-px after:flex-grow after:bg-stone-400 text-gray-400">
          OR
        </div>
        <div className="space-y-3">
          <GoogleSignInButton onClick={() => handleSocialSignIn("google")}>
            Sign up with Google
          </GoogleSignInButton>
          <FacebookSignInButton onClick={() => handleSocialSignIn("facebook")}>
            Sign up with Facebook
          </FacebookSignInButton>
        </div>
      </div>
    </div>
  );
}
