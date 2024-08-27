"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebase";
const formSchema = z.object({
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
 
});

export default function SignIn() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    sendPasswordResetEmail(auth, values.email)
    .then((res) => {
      console.log(res);
      router.push("/auth/login");
    })
  }
  return (
    <div className="flex items-center justify-between h-full w-full">
      <div className="flex flex-col items-center justify-between h-screen py-8 mx-32 w-full ">
        <div className="flex flex-col items-center justify-betwe">
          <Image
            src="/assests/logo/BBL-TEXT.png"
            alt="Logo"
            width={500}
            height={200}
            className="w-1/3"
          />
          <span className="font-bold">BELIVE YOUR CULTURE</span>
        </div>
        <div className="w-full space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <h1 className="text-4xl font-bold">Parolamı Sıfırla</h1>
              <div className="flex flex-col space-y-5">
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">E-posta adresiniz</FormLabel>
                      <FormControl>
                        <Input placeholder="E-mail" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              

                <Button type="submit" className="rounded-none">
                 Parolamı Sıfırla
                </Button>
                
              </div>
            </form>
          </Form>
        </div>
        <div className="h-1/5"></div>
      </div>
      <Image
        className="h-screen xl:flex hidden w-auto"
        src="/frame.png"
        alt="Logo"
        width={1000}
        height={1000}
      />
    </div>
  );
}
