"use client";

import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/assets/images/logo.svg'
import {signIn , signOut , useSession , getProviders} from 'next-auth/react'

const Nav = () => {
  return (
    <div>
        <nav>
            <Link href="">
                <Image
                 src={logo}
                 width={30}
                 height={30}
                 className="object-contain"
                />
            </Link>
        </nav>
    </div>
  )
}

export default Nav