import Footer from "@/app/_components/layout/footer";
import Navbar from "@/app/_components/layout/navbar";
import React, { PropsWithChildren } from "react";

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
