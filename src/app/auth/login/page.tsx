"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
import { Terminal } from "lucide-react";
import Icon from "@/components/Icon";
const formSchema = z.object({
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
  password: z.string().min(6, {
    message: "Parolanız en az 6 karakter olmalıdır",
  }),
});

export default function SignIn() {
  const params = useSearchParams().getAll("error");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/",
    }).then((res) => {
      console.log(res);
      
    });
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
              <h1 className="text-4xl font-bold">Hesabınıza giriş yapın</h1>
              {params.includes("CredentialsSignin") && (
                <Alert
                  variant={"destructive"}
                  className="bg-red-500 text-white"
                >
                  <Icon
                    name="CircleX"
                    color="#fff"
                    size={24}
                    className="h-5 w-5"
                  />
                  <AlertTitle>Hata!</AlertTitle>
                  <AlertDescription>
                    Giriş bilgileriniz hatalı. Lütfen tekrar deneyin
                  </AlertDescription>
                </Alert>
              )}

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
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="password">Parolanız</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Şifreniz"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-row justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rememberme" />
                    <label
                      htmlFor="rememberme"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Beni Hatırla
                    </label>
                  </div>
                  <Link href={"/auth/forgot-password"}>
                    <Button
                      variant={"outline"}
                      className="rounded-none hover:bg-zinc-200"
                    >
                      Şifremi unuttum
                    </Button>
                  </Link>
                </div>
                <Button type="submit" className="rounded-none">
                  Giriş Yap
                </Button>
                <Label className="text-lg self-center">
                  Hesabınız yok mu?{" "}
                  <Link href={"/auth/register"}>
                    <span className="font-bold underline">Kayıt ol</span>
                  </Link>
                </Label>
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
