import React from 'react'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Link from 'next/link'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import { fetchUsers } from '@/lib/userAction'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { IUserPromise } from '@/app/types/users'
const UsersPage = async({searchParams} : {searchParams: {q: string, page: string}}) => {
  const q = searchParams?.q || ""
  const page = Number(searchParams?.page) || 1
  const result: IUserPromise | undefined = await fetchUsers(q, page)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a user...'/>
        <Link href="/dashboard/users/add">
          <button type='button' className={styles.addButton}>
            Add New
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            result?.users?.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className={styles.user}>
                    <Image src={user.img || "/user.png"} alt="user" width={40} height={40} className={styles.userImage}/>
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4,16)}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "active" : "passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button type='button' className={`${styles.button} ${styles.view} `}>
                        View
                      </button>
                    </Link>
                    <button type='button' className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Pagination count={result?.count}/>
    </div>
  )
}

export default UsersPage