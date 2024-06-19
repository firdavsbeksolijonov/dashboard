"use client"
import React from 'react'
import { SubMenuItem } from '@/app/types/layout'
import Link from 'next/link'
import  styles from './menuLinks.module.css'
import { usePathname } from 'next/navigation'
const MenuLinks = ({ menu }: { menu: SubMenuItem}) => {
    const pathname = usePathname()
  return (
    <Link href={menu.path} className={`${styles.container} ${pathname === menu.path && styles.active}`}>
    {menu.icon}
    {menu.title}
    </Link>
  )
}

export default MenuLinks