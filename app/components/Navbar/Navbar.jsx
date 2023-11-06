"use client";
import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaUser } from "react-icons/fa";
import LoginButton from "./login-btn";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  const links = [
    {
      id: "catalogue",
      label: "Catalogue",
      link: "/catalogue",
    },
    {
      id: "about",
      label: "About us",
      link: "/about",
    },
    {
      id: "contact",
      label: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full flex px-3 py-1">
      <nav className="w-full flex justify-between items-center">
        <Link href="/" className="text-5xl rounded-lg">
          ▲
        </Link>
        <ul className="flex gap-5 items-center">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className="text-md font-light tracking-tight hover:text-emerald-700 duration-100"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li>
            <div className="dropdown dropdown-hover dropdown-end">
              <label
                tabIndex={0}
                className="btn m-1 bg-transparent hover:bg-transparent border-none"
              >
                {session ? (
                  <img
                    alt={session.user.name}
                    src={session.user.image}
                    className="w-8"
                  />
                ) : (
                  <FaUser />
                )}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="w-fit hover:bg-transparent bg-transparent">
                  <LoginButton />
                </li>
                <li className="w-fit hover:bg-transparent bg-transparent">
                  <ThemeSwitcher />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
