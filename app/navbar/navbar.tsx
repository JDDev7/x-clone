import Link from 'next/link'
import React from 'react'
import style from './navbar.module.css'
import { IconBell, IconHome, IconMessage, IconSearch, IconSettings, IconUserCircle, IconFeatherFilled } from '@tabler/icons-react'
import LoginButton from '../components/login-button/login-button'


function Navbar() {
  return (
    <nav className={style.navbarContainer}>
        <div className={style.Logo}><IconFeatherFilled className='w-8 h-8'/><Link href="/">Pajaritter</Link></div>
        <div className='flex flex-row items-center justify-start text-center gap-1 w-[200px]'><IconHome /><Link href="/" className={style.navbarLink}> Home</Link></div>
        <div className='flex flex-row items-center justify-start text-center gap-1 w-[200px]'><IconSearch /><Link href="/" className={style.navbarLink}> Explore</Link></div>
        <div className='flex flex-row items-center justify-start text-center gap-1 w-[200px]'><IconBell /><Link href="/" className={style.navbarLink}> Notifications</Link></div>
        <div className='flex flex-row items-center justify-start text-center gap-1 w-[200px]'><IconMessage/><Link href="/" className={style.navbarLink}> Chat</Link></div>
        <div className='flex flex-row items-center justify-start text-center gap-1 w-[200px]'><IconUserCircle /><Link href="/" className={style.navbarLink}> Profile</Link></div>
        <div className='flex flex-row items-center justify-start text-center gap-1 w-[200px]'><IconSettings /><Link href="/" className={style.navbarLink}> Settings</Link></div>
        <div className='flex flex-row items-center justify-start text-center gap-1 w-[200px]'><LoginButton /></div>
    </nav>
  )
}

export default Navbar