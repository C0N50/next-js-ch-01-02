import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className="flex min-h-screen flex-row items-center justify-evenly p-24 text-2xl">{children}</main>
    </>
  );
}
