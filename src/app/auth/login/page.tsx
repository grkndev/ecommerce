"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignIn() {
  const router = useRouter();
  const loginHandle = () => {
    router.push("/");
  };
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
          <h1 className="text-4xl font-bold">Hesabınıza giriş yapın</h1>
          <div className="flex flex-col space-y-5">
            <div className="w-full">
              <span>E-posta adresiniz</span>
              <Input placeholder="E-mail" />
            </div>
            <div className="w-full">
              <span>Parola</span>
              <Input placeholder="Parola" type="password" />
            </div>
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
              <Link href={""}>
                <Button
                  variant={"outline"}
                  className="rounded-none hover:bg-zinc-200"
                >
                  Şifremi unuttum
                </Button>
              </Link>
            </div>
            <Button onClick={loginHandle} className="rounded-none">
              Giriş Yap
            </Button>
            <Label className="text-lg self-center">
              Hesabınız yok mu?{" "}
              <Link href={"/auth/register"}>
                <span className="font-bold underline">Kayıt ol</span>
              </Link>
            </Label>
          </div>
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
