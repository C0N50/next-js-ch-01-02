import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { error } from "console";

export const metadata = {
  title: 'About',
  description: 'About Page'
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </>
  );
}
