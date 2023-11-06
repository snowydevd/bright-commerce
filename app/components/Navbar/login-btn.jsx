"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-row w-full justify-center items-center gap-3">
            <div className="">
              <div>
                <p className="lg:block hidden">{session.user.name}</p>
              </div>

              <button
                className="items-center lg:block hidden  duration-100 dark:text-stone-500"
                onClick={() => signOut()}
              >
                <span className="text-xs text-red-500 hover:text-red-800 duration-100">
                  Log out
                </span>
              </button>
            </div>

            <button onClick={() => signOut()} className="">
              <Image
                width={50}
                height={50}
                src={session.user.image}
                alt={session.user.name}
                className="rounded-full lg:hidden block"
              />
            </button>
            <Image
              width={50}
              height={50}
              src={session.user.image}
              alt={session.user.name}
              className="rounded-full lg:block hidden"
            />
          </div>

          <div className="w-full flex flex-row justify-between items-center"></div>
        </div>
      ) : (
        <button
          className="rounded-md border border-stone-300 px-3 py-1 text-sm dark:border-stone-600 w-5/6"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </>
  );
}
