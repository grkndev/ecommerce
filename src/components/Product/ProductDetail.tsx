"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ProductDetailProps = {
  name: string;
  price: string;
  discountPrice?: string;
  sizes?: string[];
  images: string[];
};
export default function ProductDetail({
  name,
  price,
  discountPrice,
  sizes,
  images,
}: ProductDetailProps) {
  const [size, setSize] = React.useState<string>("S");
  return (
    <div className="flex flex-col space-y-10 w-full mt-8 xl:m-0 ">
      <div className="flex flex-col space-y-4 w-full md:w-1/2">
        <h1 className="font-bold text-3xl lg:text-5xl">{name}</h1>
        <div className="flex flex-row items-center space-x-4">
          {discountPrice && (
            <div className="bg-[#CB9803] w-12 h-12 items-center justify-center flex">
              <span>
                %
                {Math.floor(
                  ((parseFloat(price) - parseFloat(discountPrice)) /
                    parseFloat(price)) *
                    100
                )}
              </span>
            </div>
          )}
          <div className="flex space-x-1">
            <h5 className="font-bold text-3xl lg:text-4xl">
              ₺{discountPrice ? discountPrice : price}
            </h5>
            {discountPrice && (
              <h6 className="text-base lg:text-xl line-through opacity-50">₺{price}</h6>
            )}
          </div>
        </div>
      </div>
      {sizes && (
        <div className="flex flex-col space-y-2">
          <span className="font-bold text-xl">Beden</span>
          <div className="flex flex-row  items-center md:justify-normal space-x-4">
            {sizes.map((s, _) => (
              <Button
                key={s}
                onClick={() => setSize(s)}
                className={cn(
                  "w-14 h-14 rounded-none",
                  size === s && "bg-black text-white"
                )}
                variant={"outline"}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
      )}
      <div className="w-5/6 items-center justify-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        voluptate quasi magnam nulla reprehenderit quae laborum ipsum. Delectus,
        distinctio corporis. Omnis mollitia, cum ea repellendus architecto
        excepturi odit voluptatibus a. Iste autem voluptate aliquam rem pariatur
        sequi consequatur animi ut dolorem, aliquid rerum quod a dolor, possimus
        commodi nostrum, cum beatae earum? Alias facilis, debitis minima ratione
        corrupti et explicabo. At officia eius a perspiciatis unde facilis
        pariatur amet iure, recusandae quod ipsa voluptate tenetur porro quas et
        quia rerum, cum repellendus dolorem accusantium, fugiat inventore.
        Voluptas magnam eaque dolorum!
      </div>
    </div>
  );
}
