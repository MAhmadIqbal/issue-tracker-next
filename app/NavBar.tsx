'use client';

import Link from 'next/link'
import React from 'react'
import {FaBug} from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname()
  const lists = [
    {label:'Dashboard', href:'/'},
    {label:'Issues', href:'/issues'},
  ]
    return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href = '/'> <FaBug/> </Link>
    <ul className='flex space-x-6'>
        {lists.map(list=><Link href = {list.href} key={list.href} 
        className={classNames({
          'text-zinc-900': list.href === currentPath,
          'text-zinc-500': list.href != currentPath,
          'hover: text-zinc-800 transition-colors': true,
        })}> {list.label}</Link>)}
        
        
    </ul>
    
    </nav>
  )
}

export default NavBar