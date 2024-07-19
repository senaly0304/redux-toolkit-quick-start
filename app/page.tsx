'use client'

import { Button } from "@/components/ui/button";
import { PlusCircleIcon, MinusCircleIcon } from "lucide-react";
import { decrement, increment, incrementByAmount } from "@/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hook";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  
  return (
    <main className='pt-8 pb-40 lg:pt-10 container'>
      <div className='flex items-center justify-center gap-5'>
        <Button onClick={() => dispatch(decrement())}>
          <MinusCircleIcon />
        </Button>
        <span className='font-bold underline'>{count}</span>
        <Button onClick={() => dispatch(increment())}>
          <PlusCircleIcon />
        </Button>
      </div>
      <div className='flex items-center justify-center mt-6 gap-5'>
        <Input className='max-w-32' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
        <Button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
          <PlusCircleIcon />
        </Button>
      </div>
    </main>
  );
}
