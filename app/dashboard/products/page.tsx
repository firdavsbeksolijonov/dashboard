import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "@/app/ui/dashboard/product/product.module.css"
import { fetchProducts } from '@/lib/productAction'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { IPRoductPromise } from '@/app/types/product'
const Productspage = async({searchParams} : {searchParams: {q: string, page: string}})=> {
  const q = searchParams?.q || ""
  const page = Number(searchParams?.page) || 1
  const result: IPRoductPromise | undefined = await fetchProducts(q, page)
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a product...' />
        <Link href="/dashboard/products/add">
          <button type='button' className={styles.addButton}>
            Add New
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            result?.products?.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className={styles.user}>
                    <Image src="/user.png" alt="user" width={40} height={40} className={styles.userImage} />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <td>{product.size}</td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button type='button' className={`${styles.button} ${styles.view}`}>
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
      <Pagination count={result?.count} />
    </div>
  )
}

export default Productspage