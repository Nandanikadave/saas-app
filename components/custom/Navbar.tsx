import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavbarItems from '../custom/Navitems'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href='/' >
          <div className='flex items-center gap-2.5 cursor-pointer'>
            <Image src='/images/logo.svg' alt='Logo' width={46} height={46} />
          </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavbarItems />
            <SignedOut>
              <SignInButton>
                <button className='btn btn-signin'>Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl='/'/>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar