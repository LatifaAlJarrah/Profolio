"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import GithubSignInButton from "../GithubSignInButton";
import FacebookSignInButton from "../FacebookSignInButton";
import SignInButton from "../SignInButton";
import Logo from "../logo/Logo";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { signIn } from "next-auth/react";

interface SignInFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  type: string;
}

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});

const SignInForm = ({ isOpen, onClose, type }: SignInFormProps) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    setError(null);

    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (result?.error) {
      if (result.error.startsWith("AUTH_ERROR:")) {
        setError(result.error.replace("AUTH_ERROR:", ""));
      } else {
        setError("Something went wrong");
      }
      return;
    }
    onClose?.(); // ✅ Close the modal
    router.push("/projects");
  };

  if (!isOpen) return null;

  return (
    <>
      {type === "signin" && (
        <Form {...form}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-md">
              <button
                onClick={onClose}
                className="float-right text-2xl font-bold text-red-600"
              >
                &times;
              </button>
              <div className="justify-center items-center flex flex-col">
                <Logo />
                <h2 className="text-sm font-normal my-4 text-charcoalGray">
                  Log in to view your own projects
                </h2>
              </div>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
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
                    render={({ field }) => (
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
                </div>

                {error && (
                  <div className="text-red-500 text-sm mt-2 text-center">
                    {error}
                  </div>
                )}
                <SignInButton disabled={form.formState.isSubmitting}>
                  Sign In
                </SignInButton>
              </form>

              <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 text-gray-400">
                OR
              </div>

              <GithubSignInButton>Sign up with Github</GithubSignInButton>
              <FacebookSignInButton>Sign up with Facebook</FacebookSignInButton>
            </div>
          </div>
        </Form>
      )}
    </>
  );
};

export default SignInForm;
