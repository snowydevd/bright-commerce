"use client";
import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaUser } from "react-icons/fa";
import LoginButton from "./login-btn";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import NavLogo from "../../../public/logo.png";
export default function Navbar() {
  const { data: session } = useSession();

  const links = [
    {
      id: "catalogue",
      label: "Catalogo",
      link: "/catalogue",
    },
    {
      id: "about",
      label: "Sobre nosotros",
      link: "/about",
    },
    {
      id: "contact",
      label: "Contacto",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full flex px-3 py-1">
      <nav className="w-full flex justify-between items-center p-4">
        <Link href="/" className="text-3xl rounded-lg font-bold">
          <div className="flex">
            <h1 className="font-brasika text-xl lg:text-2xl">Nous</h1>
            <h1 className="font-brasika text-xl lg:text-2xl">Visions</h1>
          </div>
        </Link>
        <div className="lg:block hidden mr-8">
          <ul className="flex gap-16 items-center">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="text-md font-light tracking-tight hover:text-pink-600 duration-100"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row items-center ">
          <div className="w-fit hover:bg-transparent bg-transparent">
            <ThemeSwitcher />
          </div>
          <div className="dropdown dropdown-hover dropdown-end">
            <label
              tabIndex={0}
              className="btn m-1 bg-transparent hover:bg-transparent border-none"
            >
              {session ? (
                <img
                  alt={session.user.name}
                  src={session.user.image}
                  className="w-8 rounded-full"
                />
              ) : (
                <FaUser />
              )}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <div className="lg:hidden block">
                {links.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link
                        href={link.link}
                        className="text-md font-light tracking-tight hover:text-zinc-400 duration-100"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </div>
              <li className="w-fit hover:bg-transparent bg-transparent rounded-lg">
                <LoginButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
