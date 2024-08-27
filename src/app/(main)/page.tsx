import Branding from "@/components/Branding/branding";
import { FeedBack } from "@/components/Consumer/Review";
import {
  CreateYourStyle,
  MostSelling,
  NewAdded,
  News,
} from "@/components/Parts/Parts";
import Slider from "@/components/Slider/slider";

export default function Home() {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <Slider />
      <Branding />
      <div className="w-full px-16 md:px-32 items-center flex flex-col">
        <MostSelling />
        <div className="w-full h-1 bg-zinc-200 mt-8 sm:mt-16  rounded-full " />
        <NewAdded />
        <div className="w-full h-1 bg-zinc-200 mt-8 sm:mt-16  rounded-full " />
        <CreateYourStyle />
        <div className="w-full h-1 bg-zinc-200 mt-8 sm:mt-16  rounded-full " />
        <FeedBack />
        <News />
      </div>
    </div>
  );
}
