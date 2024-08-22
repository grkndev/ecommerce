"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";
import { Input } from "@/components/ui/input";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [size, setSize] = React.useState<string>("S");
  const [count, setCount] = React.useState<number>(1);

  return (
    <div className="w-full px-16 py-8 flex space-x-16 h-full ">
      <div className="flex flex-row space-x-4 ">
        <Image
          src="https://ideacdn.net/idea/gr/05/myassets/products/138/forma01.png"
          alt="Logo"
          width={500}
          height={1000}
          className="rounded-3xl object-cover w-full aspect-square"
        />
        <div className="flex flex-col space-y-4 w-auto">
          <Image
            src="https://ideacdn.net/idea/gr/05/myassets/products/138/forma03.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-cover w-32 aspect-square rounded-3xl hover:opacity-75 transition-opacity duration-300"
          />
          <Image
            src="https://ideacdn.net/idea/gr/05/myassets/products/138/forma02.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-cover w-32 aspect-square rounded-3xl hover:opacity-75 transition-opacity duration-300"
          />
        </div>
      </div>
      <div className="space-y-8 w-1/2 justify-between flex flex-col">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-5xl">BBL 2024 JERSEY</h1>
            <div className="flex flex-row items-center space-x-4">
              <div className="bg-[#CB9803] w-12 h-12 items-center justify-center flex">
                <span>%61</span>
              </div>
              <div className="flex space-x-1">
                <h5 className="font-bold text-4xl">399.99 TL</h5>
                <h6 className="text-xl line-through opacity-50">1050.00 TL</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-bold text-xl">Beden</span>
            <div className="space-x-2 flex flex-row">
              {sizes.map((s) => (
                <Button
                  onClick={() => setSize(s)}
                  className={cn(
                    "w-16 h-16 rounded-none",
                    size === s && "bg-black text-white"
                  )}
                  variant={"outline"}
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-row">
            <Button
              variant={"outline"}
              className="w-full rounded-none space-x-2 h-16"
              onClick={() => {
                if (count <= 1) return;
                setCount(count - 1);
              }}
            >
              <Icon name="Minus" size={24} color="#000" />
            </Button>
            <Input
              type="number"
              value={count}
              onChange={(e) => {
                if (Number(e.target.value) < 1) return setCount(1);

                setCount(Number(e.target.value));
              }}
              className="h-full w-full items-center justify-center text-center text-xl rounded-none"
            />
            <Button
              variant={"outline"}
              className="w-full rounded-none space-x-2 h-16"
              onClick={() => {
                if(count >= 10) return;
                setCount(count + 1)
              }}
            >
              <Icon name="Plus" size={24} color="#000" />
            </Button>
          </div>
          <Button className="w-full rounded-none space-x-2 h-16">
            <Icon name="ShoppingBag" size={24} color="#fff" />
            <span className="text-lg">Sepete Ekle</span>
          </Button>
          <Button variant={"outline"} className="rounded-none h-16 w-16">
            <Icon name="Heart" size={24} color="#000" />
          </Button>
        </div>
      </div>
    </div>
  );
}

const sizes = ["S", "M", "L", "XL", "2XL"];
