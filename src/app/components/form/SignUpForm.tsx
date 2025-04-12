"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import GoogleSignInButton from "../GoogleSignInButton";
import FacebookSignInButton from "../FacebookSignInButton";
import SignInButton from "../SignInButton";

import Logo from "../logo/Logo";

// Types
interface SignUpFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  type: string;
}

// Validation Schema
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

// API Services
const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `/api/user/check-email?email=${encodeURIComponent(email)}`
    );

    if (!response.ok) {
      throw new Error("Failed to check email");
    }

    const { exists } = await response.json();
    return exists;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
};

const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<Response> => {
  return fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

// Main Component
const SignUpForm = ({ isOpen, onClose, type }: SignUpFormProps) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleEmailBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (!email || form.formState.errors.email) return;

    const exists = await checkEmailExists(email);
    if (exists) {
      form.setError("email", {
        type: "manual",
        message: "Email already exists",
      });
    }
  };

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setError(null);

    try {
      // Check email existence
      const emailExists = await checkEmailExists(values.email);
      if (emailExists) {
        setError("Email already exists");
        return;
      }
      if (error === "AccessDenied") {
        return "This email is already used with another sign-in method.";
      }

      // Register user
      const response = await registerUser({
        username: values.username,
        email: values.email,
        password: values.password,
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      onClose?.();
      router.push("/");
    } catch (error) {
      console.error("Registration error:", error);
      setError(error instanceof Error ? error.message : "Registration failed");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {type && (
        <Form {...form}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-md">
              <button
                onClick={onClose}
                className="float-right text-2xl font-bold text-red-600"
                aria-label="Close sign up form"
              >
                &times;
              </button>

              <div className="flex flex-col items-center justify-center">
                <Logo />
                <h2 className="text-sm font-normal my-4 text-charcoalGray">
                  Sign up to make your own projects
                </h2>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
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
                    render={({ field }) => (
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
                    render={({ field }) => (
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
                    render={({ field }) => (
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
                </div>

                {error && (
                  <div className="text-red-500 text-sm mt-2 text-center">
                    {error}
                  </div>
                )}

                <SignInButton disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Signing Up..." : "Sign Up"}
                </SignInButton>
              </form>

              <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 text-gray-400">
                OR
              </div>

              <div className="space-y-3">
                <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
                <FacebookSignInButton>
                  Sign up with Facebook
                </FacebookSignInButton>
              </div>
            </div>
          </div>
        </Form>
      )}
    </>
  );
};

export default SignUpForm;
