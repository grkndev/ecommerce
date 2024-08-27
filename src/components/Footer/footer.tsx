import React from "react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="my-8 items-start justify-center flex flex-col w-full">
      <div className="items-center justify-between flex flex-col xl:flex-row w-full space-y-10 ">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-3xl md:text-6xl text-nowrap">
            BBL ESPORTS
          </p>
          <p className="text-nowrap text-[10px] md:text-sm">
            BELIVE YOUR YOURSELF BELIVE YOUR CULTURE
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:flex xl:flex-row items-start justify-between place-items-center   w-2/3 space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-1 items-center justify-center">
            <span className="font-bold text-2xl">BİZ</span>
            <div className="flex flex-col items-center justify-center space-y-1 text-zinc-500 ">
              <Link href={"#"} className="text-center">BİGBOSSLAYF</Link>
              <Link href={"#"} className="text-center">BBL ESPORTS</Link>
              <Link href={"#"} className="text-center">BBL TALENT</Link>
              <Link href={"#"} className="text-center">BBL ACADEMY</Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="font-bold items-center justify-center text-2xl">KURUMSAL</span>
            <div className="flex flex-col space-y-1 text-zinc-500 ">
              <Link href={"#"} className="text-center">İletişim</Link>
              <Link href={"#"} className="text-center">İletişim Formu</Link>
              <Link href={"#"} className="text-center">Kargo Takibi</Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="font-bold items-center justify-center text-2xl">YARDIM</span>
            <div className="flex flex-col space-y-1 text-zinc-500">
              <Link href={"#"} className="text-center">Giyim Ölçüleri</Link>
              <Link href={"#"} className="text-center">Şifremi Unuttum</Link>
              <Link href={"#"} className="text-center">Kargo ve Teslimat Detayları</Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="font-bold items-center justify-center text-2xl">ALIŞVERİŞ</span>
            <div className="flex flex-col space-y-1 text-zinc-500">
              <Link href={"#"} className="text-center">Satış Sözleşmesi</Link>
              <Link href={"#"} className="text-center">Gizlilik ve Güvenlik</Link>
              <Link href={"#"} className="text-center">İptal ve İade koşulları</Link>
              <Link href={"#"} className="text-center">Kişisel Veriler Politikası</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-zinc-200 my-4  rounded-full " />

      <div className="text-zinc-500">
        <p className="">BBL ESPORTS, bir BigBossLayf kuruluşudur.</p>
        <p>
          BBL YAPIM YAZILIM REK. HİZ. VE BİL. OYUN FAAL. LTD. ŞTİ.  ©️
          2020-2024. Tüm Hakları Saklıdır
        </p>
      </div>
    </footer>
  );
}
