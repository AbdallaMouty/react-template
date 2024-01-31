import { Button } from "@/components/ui/button";
import { count } from "@/store";
import { useAtom } from "jotai";
import { Minus, Plus } from "lucide-react";
import React from "../assets/react.svg";

export default function Home() {
  const [num, setNum] = useAtom(count);

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center">
      <div className="flex flex-col w-full items-center h-fit space-y-16">
        <div className="flex flex-row items-center justify-center space-x-12 h-fit w-full">
          <h1 className="text-7xl font-extralight">
            A<span className="text-sm">bdalla</span>
          </h1>
          <img src={React} className="w-16 h-16 react" />
        </div>
        <div className="flex flex-row items-center justify-center space-x-5 h-fit w-full">
          <h1 className="text-2xl text-white text-center">My React Template</h1>
          <div className="rounded-full h-2 w-2 bg-blue-500 ping"></div>
        </div>
        <div className="flex felx-row w-full justify-center h-fit space-x-2">
          <Button variant={"default"} onClick={() => setNum(num - 1)}>
            <Minus size={16} color="white" />
          </Button>
          <Button variant={"default"} disabled>
            {num}
          </Button>
          <Button variant={"default"} onClick={() => setNum(num + 1)}>
            <Plus size={16} color="white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
