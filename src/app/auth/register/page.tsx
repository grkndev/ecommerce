"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { set, z } from "zod";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Icon from "@/components/Icon";
import { DatePickerDemo } from "@/components/DatePicker/datepicker";
const formSchema = z.object({
  name: z.string().min(2, { message: "Adınızı giriniz" }),
  surname: z.string().min(2, { message: "Soyadınızı giriniz" }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
  password: z.string().min(6, {
    message: "Parolanız en az 6 karakter olmalıdır",
  }),
  sex: z.string().min(1, { message: "Cinsiyetinizi seçiniz" }),
  phone: z.string().min(10, { message: "Telefon numaranızı giriniz" }),
  date: z.string().min(10, { message: "Doğum tarihinizi giriniz" }),
});

export default function SignIn() {
  const [signError, setSignError] = React.useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      sex: "",
      phone: "",
      date: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user) return;
        toast({
          title: "Başarılı",
          description:
            "Kullanıcı başarıyla oluşturuldu. Giriş sayfasına yönlendiriliyorsunuz.",
          variant: "default",
        });
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      })
      .catch((error) => {
        toast({
          title: "Hata",
          description: "Bu kullanıcı zaten mevcut",
          variant: "destructive",
        });
        setSignError(error.message);
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
              <h1 className="text-4xl font-bold">Yeni hesap oluşturun</h1>
              {signError && (
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
                    {signError.includes("email-already-in-use")
                      ? "Bu e-posta adresi zaten kullanımda"
                      : "Bir hata oluştu. Lütfen tekrar deneyin"}
                  </AlertDescription>
                </Alert>
              )}
              <div className="flex flex-col space-y-5">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Adınız</FormLabel>
                      <FormControl>
                        <Input type="name" placeholder="Adınız" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="surname"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="surname">Soyadınız</FormLabel>
                      <FormControl>
                        <Input
                          type="surname"
                          placeholder="Soyadınız"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="phone">Telefon numaranız</FormLabel>
                      <FormControl>
                        <Input
                          type="phone"
                          placeholder="(5XX) XXX XX XX"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="date"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel htmlFor="phone">Doğum Tarihiniz</FormLabel>
                      <FormControl>
                        <DatePickerDemo {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="rounded-none">
                  Kayıt Ol
                </Button>
                <Label className="text-lg self-center">
                  Zaten bir hesabınzı var mı?{" "}
                  <Link href={"/auth/login"}>
                    <span className="font-bold underline">Giriş Yap</span>
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
