/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iqBuL0TQtGU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/Icon";

export default function Component() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://ideacdn.net/idea/gr/05/myassets/products/138/forma01.png",
      title: "BBL 2024 JERSEY",
      price: 399.99,
      quantity: 1,
    },
    {
      id: 2,
      image:
        "https://ideacdn.net/idea/gr/05/myassets/products/145/sleeve02.png",
      title: "BBL Sleeve",
      price: 299.99,
      quantity: 1,
    },
  ]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const handleRemoveItem = (id: any) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const handleUpdateQuantity = (id: any, quantity: any) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };
  const handleApplyCoupon = () => {
    if (coupon === "ALWAYSBEKING") {
      setDiscount(100);
      return;
    }
    setCoupon("");
  };
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 150;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax - discount;
  return (
    <div className="p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Sepetim</h1>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[100px_1fr] items-center gap-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <div className="grid grid-cols-1 items-center gap-2">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">
                      ₺{item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        item.quantity === 1 ? handleRemoveItem(item.id) : 
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      // disabled={item.quantity === 1}
                      className="p-1 h-6 w-6"
                    >
                      {item.quantity === 1 ? (
                        <TrashIcon className="h-3 w-3" />
                      ) : (
                        <MinusIcon className="h-3 w-3" />
                      )}
                    </Button>
                    <span className="text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1 h-6 w-6"
                    >
                      <PlusIcon className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 bg-muted/40 p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Sipariş özeti</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>₺{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Kargo</span>
              <span>₺{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Vergiler</span>
              <span>₺{tax.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between">
                <span>İndirim</span>
                <span>-₺{discount.toFixed(2)}</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between font-bold">
              <span>Toplam</span>
              <span>₺{total.toFixed(2)}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row gap-2">
              {discount ? (
                <div className="flex flex-row space-x-2 py-2 items-center justify-center">
                  <span className="flex flex-row space-x-2">
                    <Badge variant={"outline"} className="mr-1">
                      {coupon}
                    </Badge>
                    indirim kodu uygulandı
                  </span>
                  <button onClick={()=>setDiscount(0)} className="bg-red-200 w-6 h-6 items-center justify-center flex rounded-md">
                    <Icon name="X" size={12} />
                  </button>
                </div>
              ) : (
                <>
                  <Input
                    type="text"
                    placeholder="İndirim kodunuzu giriniz"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleApplyCoupon}>Uygula</Button>
                </>
              )}
            </div>
            <Button className="w-full">Güvenli Ödeme ile devam et</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
