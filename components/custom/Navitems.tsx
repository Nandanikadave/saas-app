"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';

const NavItems =[
    {label : 'Home', href: '/'},
    {label : 'Companions', href: '/companions'},
    {label : 'My Journey', href: '/my-journey'},
]
const Navitems = () => {
    const pathName = usePathname();
  return (
    <div className='flex items-center gap-8'>
      {NavItems.map((item) => (
        <Link key={item.label} href={item.href} className={cn(pathName === item.href ? 'text-primary font-semibold' : 'text-muted-foreground', 'ransition-colors hover:text-primary')}>
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default Navitems