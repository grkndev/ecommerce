import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export function ProductCard({
  productName,
  price,
  discountedPrice,
  discountRate,
}: {
  productName: string;
  price: string;
  discountedPrice: string;
  discountRate: string;
}) {
  return (
    <Link
      href={"/product/product-1"}
      className="hover:bg-zinc-200 transition-colors duration-300 p-4 max-w-96 w-full flex flex-col space-y-2 items-center justify-center"
    >
      <Image
        className="w-full rounded-2xl"
        src={"/forma.png"}
        width={1000}
        height={1000}
        alt="forma"
      />
      <div className="w-full flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold :text-2xl">{productName}</h1>
          <div className="items-start justify-start flex space-x-2">
            <span className="font-bold text-[#CB9803] text-nowrap text-2xl">
              ₺ {discountedPrice}
            </span>
            <span className="line-through text-black/50 text-nowrap font-bold text-sm">
              ₺ {price}
            </span>
          </div>
        </div>
        <div className="p-2 bg-[#CB9803]">
          <span>{discountRate}</span>
        </div>
      </div>
    </Link>
  );
}

export function MostSelling() {
  return (
    <div className="mt-8 sm:mt-16 w-full items-center justify-center flex flex-col sm:gap-y-9 gap-y-2">
      <h1 className="font-bold text-3xl sm:text-4xl">EN ÇOK SATANLAR</h1>
      <div className="flex flex-row gap-x-16 items-center justify-center w-full">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ProductCard
                    price={"1050.00"}
                    discountedPrice={"399.99"}
                    discountRate={"%61"}
                    productName={`BBL 2024 JERSEY`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div>
            <CarouselPrevious />
          </div>
          <div>
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div className="w-full items-center justify-center flex">
        <Button variant={"outline"} className="w-full md:w-2/3 lg:w-1/3">
          Devamını Gör
        </Button>
      </div>
    </div>
  );
}

export function NewAdded() {
  return (
    <div className="mt-8 sm:mt-16 w-full items-center justify-center flex flex-col sm:gap-y-9 gap-y-2">
      <h1 className="font-bold text-3xl sm:text-4xl">YENİ EKLENENLER</h1>
      <div className="flex flex-row gap-x-16 items-center justify-center w-full">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ProductCard
                    price={"1050.00"}
                    discountedPrice={"399.99"}
                    discountRate={"%61"}
                    productName={`BBL 2024 JERSEY`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div>
            <CarouselPrevious />
          </div>
          <div>
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div className="w-full items-center justify-center flex">
      <Button variant={"outline"} className="w-full md:w-2/3 lg:w-1/3">
          Devamını Gör
        </Button>
      </div>
    </div>
  );
}

export function CreateYourStyle() {
  return (
    <div className="mt-8 sm:mt-16 bg-zinc-200 rounded-[32px] w-full items-center justify-center flex flex-col px-8 py-10 space-y-6">
      <span className="font-bold text-2xl md:text-6xl">KENDİ TARZINI YARAT</span>
      <div className=" flex-col flex gap-2 md:gap-6">
        <div className="flex-row flex gap-2 md:gap-6">
          <Image
            className="w-[35%]"
            src={"/assests/kty/kty1.png"}
            alt="kty1"
            width={1000}
            height={1000}
          />
          <Image
            className="w-[65%]"
            src={"/assests/kty/kty2.png"}
            alt="kty2"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex-row flex gap-2 md:gap-6">
          <Image
            className="w-[65%]"
            src={"/assests/kty/kty3.png"}
            alt="kty3"
            width={1000}
            height={1000}
          />
          <Image
            className="w-[35%]"
            src={"/assests/kty/kty4.png"}
            alt="kty4"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

export function News() {
  return (
    <div className="w-full flex flex-col xl:flex-row items-center justify-between p-4 md:p-14 bg-[#101010] mt-16  rounded-3xl space-y-8 xl:space-y-0">
      <div className="text-white font-bold md:text-4xl md:w-1/2">
        <p>YENİ ÜRÜN VE KAMPANYALARDAN</p>
        <p>ANINDA HABERDAR OLUN</p>
      </div>
      <div className="md:w-1/2 space-y-4">
        <Input className="w-full" placeholder="E-Posta adresiniz" />
        <Button variant={"secondary"} className="w-full">
          Abone Ol
        </Button>
      </div>
    </div>
  );
}
