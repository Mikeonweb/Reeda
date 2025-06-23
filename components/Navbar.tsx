import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { FaGithub } from "react-icons/fa6";

const Navbar = async () => {
  //declare session variable to get the session data from auth.ts
  const session = await auth();
  return (
    <header className="px-2 bg-blue-200 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={90} height={10} />
        </Link>

        {/* render data items only if user is logged in(user session) (open)*/}
        <div className="flex items-center gap-5">
          {/* if session exist and has a user, render this */}
          {session && session?.user ? (
            <>
              <Link href="create">
                <span className="text-black border border-black rounded-xl py-2 px-2">
                  Create Post
                </span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  className="text-black border border-black rounded-xl py-1 px-2"
                  type="submit"
                >
                  Logout
                </button>
              </form>

              <Link href={`/user/${session.user.id}`}>
                <span className="text-black">{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                className="text-black border flex gap-2 items-center border-black rounded-xl py-1 px-2"
                type="submit"
              >
                <FaGithub size={20} /> Login
              </button>
            </form>
          )}
        </div>
        {/* render data items only if user is logged in (closed)*/}
      </nav>
    </header>
  );
};

export default Navbar;
