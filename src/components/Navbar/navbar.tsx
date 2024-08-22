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

export default function Navbar() {
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
            
            <Link className="font-bold text-black " href={""}>
              <li className="hover:bg-zinc-200 flex justify-center items-center space-x-1  py-4 px-5 transition-colors">
                <span>SEPETİM</span>
                <Badge className="aspect-square w-1 items-center justify-center flex">
                  1
                </Badge>
              </li>
            </Link>

            <Link className="font-bold text-black " href={"/auth/login"}>
              <li className="hover:bg-zinc-200  py-4 px-5 transition-colors">
                {"giriş yap".toUpperCase()}
              </li>
            </Link>

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
