"use client";
import { swap } from "@/wrappers/swap";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [txid, setTxid] = useState("");

  const testSwap = async () => {
    const txid = await swap();
    if (txid) {
      setTxid(txid);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex items-center">
          <button
            className="p-1 border-white rounded-sm border-solid border-[.1px]"
            onClick={() => {
              testSwap();
            }}
          >
            Send Order
          </button>

          {txid && (
            <a
              href={`https://explorer.solana.com/tx/${txid}?cluster=devnet`}
              target="_blank"
              className="ml-2 text-red-500"
            >
              {txid}
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
