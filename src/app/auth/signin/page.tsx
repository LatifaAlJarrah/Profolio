// src/app/auth/signin/page.tsx
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

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have at least 8 characters"),
});

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setErrorMessage } = useError();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    const error = searchParams.get("error");
    if (error === "CredentialsSignin") {
      setErrorMessage("Invalid email or password");
    }
  }, [searchParams, setErrorMessage]);

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/projects",
    });

    if (result?.error) {
      setErrorMessage("Invalid email or password");
      return;
    }

    router.push(result?.url || "/projects");
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
            Log in to view your projects
          </h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }: { field: { value: string } }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="mail@example.com" {...field} />
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SignInButton disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Loading..." : "Sign In"}
            </SignInButton>
            <div className="text-center mt-2">
              <a
                href="/auth/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </Form>
        <div className="my-4 flex items-center justify-evenly before:h-px before:flex-grow before:bg-stone-400 after:h-px after:flex-grow after:bg-stone-400 text-gray-400">
          OR
        </div>
        <div className="space-y-3">
          <GoogleSignInButton onClick={() => handleSocialSignIn("google")}>
            Sign in with Google
          </GoogleSignInButton>
          <FacebookSignInButton onClick={() => handleSocialSignIn("facebook")}>
            Sign in with Facebook
          </FacebookSignInButton>
        </div>
      </div>
    </div>
  );
}
