"use client";
import { RoutesItem } from "@/routes/routeItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import React, { useState } from "react";
import { IconMenu, IconProfile, IconSearch } from "../icons/icons";
import Drawer from "./drawer";
import Logo from "../logo/logo";

export default function Navbar() {
  const pathName = usePathname();
  const [isopen, setIsOpen] = useState<boolean>(false);
  // Function to determine if the current route is active
  const getLinkClass = (href: string) => {
    return pathName === href
      ? "text-black-900 font-medium"
      : "text-secondary-light";
  };

  const drawerHandler = () => {
    setIsOpen((preState) => !preState);
  };

  return (
    <nav className="bg-white h-[64px] flex items-center justify-center md:h-[70px]">
      <div className="flex items-center justify-between w-full container ">
        <div className="flex items-center justify-center gap-x-4">
          <div className="chip md:hidden" onClick={drawerHandler}>
            <IconMenu className="w-6 h-6 stroke-secondary" fill="none" />
          </div>
          <Logo />
        </div>
        <div className="hidden md:flex items-center gap-x-[24px] ">
          {RoutesItem.map(({ href, id, label }) => (
            <Link key={id} href={href}>
              <p
                className={classNames(
                  "md:text-2xs lg:text-sm gap-x-6 base-transition hover:text-black-900 hover:font-medium",
                  getLinkClass(href)
                )}
              >
                {label}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="chip">
            <IconSearch
              viewBox="0 0 32 32"
              fill="none"
              className="stroke-black-900 w-6 h-6"
            />
          </div>
          <div className="chip">
            <IconProfile fill="none" className="stroke-black-900 w-6 h-6" />
          </div>
        </div>
        {/* mobile screen */}
        <Drawer isOpen={isopen} onClose={drawerHandler} />
      </div>
    </nav>
  );
}
