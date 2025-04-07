import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="border-[3px] p-1 border-gray-1 rounded-base hover:border-primary transition-colors duration-200">
    {children}
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "خانه", href: "/" },
    { label: "درباره ما", href: "/about" },
    { label: "خدمات", href: "/services" },
    { label: "تماس با ما", href: "/contact" },
  ];

  return (
    <nav className="bg-base-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-lg md:text-xl font-bold text-primary">
              لوگو
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 md:space-x-reverse">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "text-secondary hover:text-primary transition-colors duration-200",
                  {
                    "text-black font-medium": pathname === item.href,
                  }
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <IconWrapper>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="stroke-black-900 w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </IconWrapper>
            <IconWrapper>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="stroke-black-900 w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </IconWrapper>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
            >
              <span className="sr-only">باز کردن منو</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={classNames("md:hidden", {
          block: isMenuOpen,
          hidden: !isMenuOpen,
        })}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={classNames(
                "block px-3 py-2 rounded-md text-base hover:text-primary hover:bg-base transition-colors duration-200",
                {
                  "text-black font-medium": pathname === item.href,
                }
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
