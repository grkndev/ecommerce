import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export function FeedBack() {
  return (
    <div className="flex flex-col space-y-4 mt-16 w-full">
      <p className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl">MEMNUNİYET BİZİM İÇİN ÇOK ÖNEMLİ!</p>
      <div className="">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <CustomerReview />
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
    </div>
  );
}

export function CustomerReview() {
  return (
    <div className="max-w-sm hover:shadow-2xl transition-shadow duration-200  border-2 border-[#ebebeb] flex flex-col  rounded-lg p-4 w-full space-y-4">
      <div className="flex flex-row space-x-2">
        {Array.from({ length: 5 }).map((i) => (
          <img
            className="w-4 h-4"
            src={"/assests/star.png"}
            width={500}
            height={500}
            alt="Star"
          />
        ))}
      </div>
      <div className="flex flex-col space-y-4">
        <p className="font-bold text-xl lg:text-3xl">Ferit K.</p>
        <p className="text-sm lg:text-lg text-wrap">
          "Online alışveriş deneyimim mükemmeldi! Ürünlerin kalitesi harika,
          fiyatlar uygun ve kargo çok hızlı. Güvenilir ve sorunsuz bir site,
          kesinlikle tekrar alışveriş yapacağım!"
        </p>
      </div>
    </div>
  );
}
