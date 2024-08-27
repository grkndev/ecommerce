import React from "react";
import Image from "next/image";
export default function ProductImages({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col xl:flex-row xl:space-x-4 items-start justify-center">
      <Image
        src={images[0]}
        alt="Logo"
        width={500}
        height={1000}
        className="rounded-3xl object-cover w-5/6 xl:w-full aspect-square"
      />
      <div className="flex flex-row xl:flex-col gap-4 w-auto mt-2 xl:m-0">
        {images.slice(1).map((image, index) => (
          <Image
            src={image}
            alt="Logo"
            width={200}
            height={200}
            className="object-cover w-32 aspect-square rounded-3xl hover:opacity-75 transition-opacity duration-300"
          />
        ))}
      </div>
    </div>
  );
}
