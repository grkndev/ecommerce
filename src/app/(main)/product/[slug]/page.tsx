"use client";
import { Button } from "@/components/ui/button";

import React, { useEffect } from "react";

import Icon from "@/components/Icon";
import ProductDetail from "@/components/Product/ProductDetail";
import ProductCount from "@/components/Product/ProductCount";
import ProductImages from "@/components/Product/ProductImages";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useToast } from "@/components/ui/use-toast";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [count, setCount] = React.useState<number>(1);
  const { toast } = useToast();

  const handleAddCart = () => {
    toast({
      title: "Ürün sepete eklendi",
      description: "Ürün başarıyla sepete eklendi",
      
    });
  };
  return (
    <div className="w-full flex flex-col px-4 lg:px-16 py-8 space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Anasayfa</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Ürünler</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>BBL JERSEY 2024</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="w-full  flex flex-col lg:flex-row lg:space-x-16 h-full ">
        <ProductImages
          images={[
            "https://ideacdn.net/idea/gr/05/myassets/products/138/forma01.png",
            "https://ideacdn.net/idea/gr/05/myassets/products/138/forma02.png",
            "https://ideacdn.net/idea/gr/05/myassets/products/138/forma03.png",
          ]}
        />
        <div className="space-y-8 justify-between items-center flex flex-col w-full">
          <ProductDetail
            name="BBL 2024 JERSEY"
            price={"1050.00"}
            discountPrice={"399.99"}
            sizes={["S", "M", "L", "XL", "2XL"]}
            images={[]}
          />
          <div className="flex flex-col space-y-2 md:space-y-0 px-4 md:space-x-2 md:flex-row items-center justify-center">
            <ProductCount count={count} setCount={setCount} />
            <div className="w-full flex space-x-2 flex-row sm:space-x-2 items-center justify-center">
              <Button
                onClick={handleAddCart}
                className="w-full rounded-none space-x-2 h-16"
              >
                <Icon name="ShoppingBag" size={24} color="#fff" />
                <span className="text-lg">Sepete Ekle</span>
              </Button>
              <Button variant={"outline"} className="rounded-none h-16 w-16">
                <Icon name="Heart" size={24} color="#000" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
