"use client";
import Image from "next/image";
import React from "react";
import navbarTabs from "./navbar.tabs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Transtiton from "@/components/Transition/transition";
import Link from "next/link";
import Icon from "../Icon";
import { Badge } from "../ui/badge";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const session = useSession();
  const [authState, setAuthState] = React.useState<
    "loading" | "unauthenticated" | "authenticated"
  >(session.status || "loading");

  React.useEffect(() => {
    if (session.status === "authenticated") {
      setAuthState("authenticated");
    } else if (session.status === "unauthenticated") {
      setAuthState("unauthenticated");
    }
  }, [session]);
  const handleLogout = async () => {
    signOut();
  };
  return (
    <nav className="py-4 sm:px-16 px-6 flex justify-between items-center">
      <div>
        <Image
          onClick={() => window.location.replace("/")}
          src="/assests/logo/logo.png"
          alt="BBL ESPORTS"
          width={5000}
          height={2000}
          className="h-20 w-fit"
        />
      </div>
      <div>
        <MobileMenu />
        <Transtiton mode="top">
          <ul className="gap-6 lg:flex hidden">
            <NavigationMenu />

            {session.data && (
              <Link className="font-bold text-black " href={"/cart"}>
                <li className="hover:bg-zinc-200 flex justify-center items-center space-x-1  py-4 px-5 transition-colors">
                  <span>SEPETİM</span>
                  <Badge className="aspect-square w-1 items-center justify-center flex">
                    1
                  </Badge>
                </li>
              </Link>
            )}

            {authState === "unauthenticated" ? (
              <Link className="font-bold text-black " href={"/auth/login"}>
                <li className="hover:bg-zinc-200  py-4 px-5 transition-colors">
                  {"giriş yap".toUpperCase()}
                </li>
              </Link>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:bg-zinc-200  py-4 px-5 transition-colors font-bold flex flex-row space-x-1 items-center justify-center">
                  <span>HESABIM</span>
                  <Icon name="ChevronDown" size={24} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-none px-8 py-4">
                  <DropdownMenuLabel>Gürkan ÇİLOĞLU</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="font-semibold text-base">
                    <Link href={"/profile/activeorders"}>Siparişlerim</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-semibold text-base">
                    <Link href={"/profile/pastorders"}>
                      Geçmiş siparişlerim
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-semibold text-base">
                    <Link href={"/profile/favorites"}>Favorilerim</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="font-semibold text-base bg-red-500 text-white"
                  >
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </ul>
        </Transtiton>
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden hover:bg-zinc-300 p-4 transition-colors ">
        <AlignJustify size={32} color="#E8560D" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menü</SheetTitle>
          <SheetDescription>
            <NavigationMenu />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

function NavigationMenu() {
  return Object.keys(navbarTabs).map((key) => (
    <a key={key} className="font-bold text-black " href={navbarTabs[key].href}>
      <li className="hover:bg-zinc-200  py-4 px-5 transition-colors">
        {navbarTabs[key].title.toUpperCase()}
      </li>
    </a>
  ));
}
