"use client";

import { signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <>
      <form action="" className="flex flex-col w-2/4">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" />

        <label htmlFor="password">Password</label>
        <input type="Password" placeholder="Password" />
        <button>Sign-In</button>

        <div>
          <button
            onClick={() => signIn("github")}
            className="bg-gray-500 rounded-lg p-3"
          >
            Sign in with Github
          </button>
        </div>
      </form>
    </>
  );
}
