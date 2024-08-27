"use client"
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [someState, setSomeState] = useState<string>("");
  return (
    <main className="flex flex-col h-screen w-screen justify-center items-center gap-4">
      <h1>
        Parallel + Intercepting Routes Demo Application.
      </h1>
      <input
        className="border-2 border-black rounded-md"
        value={someState}
        onChange={(e)=>setSomeState(e.target.value)}
      />
      <Link
        href={"/login"}
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        login!
      </Link>
    </main>
  );
}
