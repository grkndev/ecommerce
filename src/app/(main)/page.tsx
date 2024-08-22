import Branding from "@/components/Branding/branding";
import Slider from "@/components/Slider/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <Slider />
      <Branding />
      <div className="w-full px-32 items-center flex flex-col">
        <MostSelling />
        <div className="w-full h-1 bg-zinc-200 mt-16  rounded-full " />
        <NewAdded />
        <div className="w-full h-1 bg-zinc-200 mt-16  rounded-full " />
        <CreateYourStyle />
        <div className="w-full h-1 bg-zinc-200 mt-16  rounded-full " />
        <FeedBack />
        <News />

        <footer className="my-8 items-start justify-center flex flex-col w-full">
          <div className="items-center justify-between flex w-full">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-6xl">BBL ESPORTS</p>
              <p>BELIVE YOUR YOURSELF BELIVE YOUR CULTURE</p>
            </div>
            <div className="flex flex-row items-start justify-between w-1/2">
              <div className="flex flex-col space-y-1">
                <span className="font-bold text-2xl">BİZ</span>
                <div className="flex flex-col space-y-1 text-zinc-500">
                  <Link href={"#"}>BİGBOSSLAYF</Link>
                  <Link href={"#"}>BBL ESPORTS</Link>
                  <Link href={"#"}>BBL TALENT</Link>
                  <Link href={"#"}>BBL ACADEMY</Link>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-bold text-2xl">KURUMSAL</span>
                <div className="flex flex-col space-y-1 text-zinc-500">
                  <Link href={"#"}>İletişim</Link>
                  <Link href={"#"}>İletişim Formu</Link>
                  <Link href={"#"}>Kargo Takibi</Link>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-bold text-2xl">YARDIM</span>
                <div className="flex flex-col space-y-1 text-zinc-500">
                  <Link href={"#"}>Giyim Ölçüleri</Link>
                  <Link href={"#"}>Şifremi Unuttum</Link>
                  <Link href={"#"}>Kargo ve Teslimat Detayları</Link>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-bold text-2xl">ALIŞVERİŞ</span>
                <div className="flex flex-col space-y-1 text-zinc-500">
                  <Link href={"#"}>Satış Sözleşmesi</Link>
                  <Link href={"#"}>Gizlilik ve Güvenlik</Link>
                  <Link href={"#"}>İptal ve İade koşulları</Link>
                  <Link href={"#"}>Kişisel Veriler Politikası</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-zinc-200 my-4  rounded-full " />

          <div className="text-zinc-500">
            <p className="">
              BBL ESPORTS, bir BigBossLayf kuruluşudur.
            </p>
            <p>
              BBL YAPIM YAZILIM REK. HİZ. VE BİL. OYUN FAAL. LTD. ŞTİ.  ©️
              2020-2024. Tüm Hakları Saklıdır
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="w-full flex items-center justify-between p-14 bg-[#101010] mt-16  rounded-3xl ">
      <div className="text-white font-bold text-4xl">
        <p>YENİ ÜRÜN VE KAMPANYALARDAN</p>
        <p>ANINDA HABERDAR OLUN</p>
      </div>
      <div className="w-1/2 space-y-4">
        <Input className="w-full" placeholder="E-Posta adresiniz" />
        <Button variant={"secondary"} className="w-full">
          Abone Ol
        </Button>
      </div>
    </div>
  );
}
function FeedBack() {
  return (
    <div className="flex flex-col space-y-4 mt-16">
      <p className="font-bold text-4xl">MEMNUNİYET BİZİM İÇİN ÇOK ÖNEMLİ!</p>
      <div className="flex flex-row gap-8">
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
      </div>
    </div>
  );
}
function CustomerReview() {
  return (
    <div className="hover:shadow-2xl transition-shadow duration-200  border-2 border-[#ebebeb] flex flex-col  rounded-lg p-4 w-full space-y-4">
      <div className="flex flex-row space-x-4">
        <Image
          className="w-6 h-6"
          src={"/assests/star.png"}
          width={500}
          height={500}
          alt="Star"
        />
        <Image
          className="w-6 h-6"
          src={"/assests/star.png"}
          width={500}
          height={500}
          alt="Star"
        />
        <Image
          className="w-6 h-6"
          src={"/assests/star.png"}
          width={500}
          height={500}
          alt="Star"
        />
        <Image
          className="w-6 h-6"
          src={"/assests/star.png"}
          width={500}
          height={500}
          alt="Star"
        />
        <Image
          className="w-6 h-6"
          src={"/assests/star.png"}
          width={500}
          height={500}
          alt="Star"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <p className="font-bold text-3xl">Ferit K.</p>
        <p className="text-lg">
          "Online alışveriş deneyimim mükemmeldi! Ürünlerin kalitesi harika,
          fiyatlar uygun ve kargo çok hızlı. Güvenilir ve sorunsuz bir site,
          kesinlikle tekrar alışveriş yapacağım!"
        </p>
      </div>
    </div>
  );
}
function CreateYourStyle() {
  return (
    <div className="mt-16 bg-zinc-200 rounded-[32px] w-full items-center justify-center flex flex-col px-8 py-10 space-y-6">
      <span className="font-bold text-6xl">KENDİ TARZINI YARAT</span>
      <div className=" flex-col flex gap-6">
        <div className="flex-row flex gap-6">
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
        <div className="flex flex-row gap-6">
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
function NewAdded() {
  return (
    <div className="mt-16  w-full items-center justify-center flex flex-col gap-y-9">
      <h1 className="font-bold text-4xl">YENİ EKLENENLER</h1>
      <div className="flex flex-row gap-x-16 items-center justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-full items-center justify-center flex">
        <Button variant={"outline"} className="w-1/3">
          Devamını Gör
        </Button>
      </div>
    </div>
  );
}

function MostSelling() {
  return (
    <div className="mt-16 w-full items-center justify-center flex flex-col gap-y-9">
      <h1 className="font-bold text-4xl">EN ÇOK SATANLAR</h1>
      <div className="flex flex-row gap-x-16 items-center justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-full items-center justify-center flex">
        <Button variant={"outline"} className="w-1/3">
          Devamını Gör
        </Button>
      </div>
    </div>
  );
}
function ProductCard() {
  return (
    <div className="hover:bg-zinc-200 transition-colors duration-300 p-4 max-w-96 w-full flex flex-col space-y-2 items-center justify-center">
      <Image
        className="w-full rounded-2xl"
        src={"/forma.png"}
        width={1000}
        height={1000}
        alt="forma"
      />
      <div className="w-full flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold :text-2xl">BBL 2024 JERSEY</h1>
          <div className="items-start justify-start flex space-x-2">
            <span className="font-bold text-[#CB9803] text-2xl">₺ 250,00</span>
            <span className="line-through text-black/50 font-bold text-sm">
              ₺ 200,00
            </span>
          </div>
        </div>
        <div className="p-2 bg-[#CB9803]">
          <span>%61</span>
        </div>
      </div>
    </div>
  );
}
