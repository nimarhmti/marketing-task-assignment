"use client";
import { RoutesItem } from "@/routes/routeItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import React from "react";
import Logo from "../logo/logo";
import { IconClose } from "../icons/icons";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  const pathName = usePathname();

  // Function to determine if the current route is active
  const getLinkClass = (href: string) => {
    return pathName === href
      ? "text-black-900 font-medium"
      : "text-secondary-light";
  };

  return (
    <>
      {/* Mobile Drawer */}
      <div
        className={classNames(
          "fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="p-4">
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-6">
            <Logo />
            <div onClick={onClose} className="chip">
              <IconClose className="w-6 h-6 stroke-secondary" />
            </div>
          </div>

          {/* Drawer Navigation */}
          <div className="flex flex-col gap-y-4">
            {RoutesItem.map(({ href, id, label }) => (
              <Link
                key={id}
                href={href}
                onClick={onClose}
                className={classNames(
                  "text-base py-2 px-3 rounded-base hover:bg-gray-100 transition-colors",
                  getLinkClass(href)
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}
