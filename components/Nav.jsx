"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="w-full pt-3 mb-16 flex items-center justify-between;">
        <Link
          href="/"
          className="gap-2 flex items-center justify-center;
}"
        >
          <Image
            alt="logo"
            src={logo}
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
      </nav>
      <p className="logo_text">Prompter</p>
    </div>
  );
};

export default Nav;
