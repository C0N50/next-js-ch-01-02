import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-evenly p-24 text-2xl">
      <h1>Hello World!</h1>
      <Link href="/about">About</Link>
    </main>
  );
}
