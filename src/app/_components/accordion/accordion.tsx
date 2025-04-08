"use client";
import React, { useState } from "react";
import { IconPlus } from "../icons/icons";
import classNames from "classnames";

interface AccordionProps {
  title: string;
  description: string;
}

export default function Accordion({ title, description }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-1 bg-white rounded-base px-4 md:bg-white2">
      <button
        className="flex items-center justify-between w-full py-4 text-right"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xs font-bold text-black-900  lg:text-2sm">
          {title}
        </h3>
        <IconPlus
          fill="none"
          className="w-6 h-6 stroke-gray-5 "
          viewBox="0 0 24 24"
        />
      </button>
      <div
        className={classNames("grid transition-all duration-300 ease-in-out", {
          "grid-rows-[0fr]": !isOpen,
          "grid-rows-[1fr]": isOpen,
        })}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-gray-6 pb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
