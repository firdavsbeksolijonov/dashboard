"use client"
import React, { ChangeEvent } from 'react'
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
const Search = ({placeholder} : {placeholder: string}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const {replace} = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", "1")
    if(e.target.value){
      e.target.value.length > 2 && params.set("q", e.target.value)
    }else {
      params.delete("q")
    }
    replace(`${pathname}?${params}`)
  }
  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type="text" onChange={handleChange} placeholder={placeholder} className={styles.input} />
    </div>
  )
}

export default Search