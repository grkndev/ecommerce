"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

import { useEffect, useRef, useState } from "react";

export default function Slider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <div className="absolute z-50 bottom-10 flex items-center justify-between gap-4 right-10">
        <div className="flex items-center gap-4">
          <Button
            className="w-10  h-10 rounded-full bg-[#FE7528] hover:bg-[#a04d1d]"
            onClick={() => {
              if (current === 1) return api?.scrollTo(count - 1);
              api?.scrollTo(current - 2);
            }}
          >
            <div>
              <ChevronLeftIcon className="text-white size-5 " />
            </div>
          </Button>
          <div className="w-full flex gap-4 ">
            {Array.from({ length: count }, (_, i) => (
              <Button
                key={i}
                className={`hover:bg-darkTeknokent border-2 border-solid w-5 h-9 rounded-full border-[#FE7528] ${
                  current === i + 1
                    ? "bg-[#FE7528]  "
                    : "bg-transparent  "
                }`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
          <Button
            className="w-10 h-10 rounded-full bg-[#FE7528] hover:bg-[#a04d1d]"
            onClick={() => {
              if (current === count) return api?.scrollTo(0);
              api?.scrollTo(current);
            }}
          >
            <div>
              <ChevronRightIcon className="text-white size-5" />
            </div>
          </Button>
        </div>
      </div>
      <CarouselContent className=" ">
        {/* 
          
         */}
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i} className="h-auto ">
            <div
              style={{
                backgroundImage: `url(/HERO.png)`,
              }}
              className="sm:h-[40vh] h-[25vh] md:h-[50vh] xl:h-[54vh] bg-no-repeat  w-full"
            ></div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}