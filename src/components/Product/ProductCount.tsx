import React from "react";
import Icon from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function ProductCount({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-row">
      <Button
        variant={"outline"}
        className="w-full rounded-none h-16"
        onClick={() => {
          if (count <= 1) return;
          setCount(count - 1);
        }}
      >
        <Icon name="Minus" size={24} color="#000" />
      </Button>
      <Input
        type="number"
        value={count}
        onChange={(e) => {
          if (Number(e.target.value) < 1) return setCount(1);

          setCount(Number(e.target.value));
        }}
        className="h-16 w-full  items-center justify-center text-center text-xl rounded-none"
      />
      <Button
        variant={"outline"}
        className="w-full rounded-none h-16"
        onClick={() => {
          if (count >= 10) return;
          setCount(count + 1);
        }}
      >
        <Icon name="Plus" size={24} color="#000" />
      </Button>
    </div>
  );
}
