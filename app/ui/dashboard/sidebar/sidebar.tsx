import Image from '@/node_modules/next/image'
// import React, { ReactNode } from 'react'
import styles from './sidebar.module.css'
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag } from 'react-icons/md'

import { MenuItem } from '@/app/types/layout'
import MenuLinks from './menuLinks/menuLinks'

const menuItems: MenuItem[] = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            }
        ]
    }
]
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/user.png" alt="user" width={50} height={50} />
                <div className={styles.userDetail}>
                    <span className={styles.userName}>
                        John Doe
                    </span>
                    <span className={styles.userTitle}>
                        Administrator
                    </span>
                </div>
            </div>
            <ul>
                {
                    menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <span className={styles.cat}>{item.title}</span>
                                {
                                    item.list.map((menu, menuIndex) => {
                                        return (
                                            <MenuLinks key={menuIndex} menu={menu}/>
                                        )
                                    })
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar