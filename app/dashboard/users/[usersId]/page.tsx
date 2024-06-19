import React from 'react'
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from 'next/image'
import { getSingleUser, updateUser } from '@/lib/userAction'


const SingleUser = async ({ params }: { params: { usersId: string } }) => {
  const { usersId } = params
  const user = await getSingleUser(usersId)
  const userUpdated = async (formdata: FormData) => {
    "use server";
    let payload = {
      id: usersId,
      username: formdata.get('username'),
      email: formdata.get('email'),
      password: formdata.get('password'),
      phone: formdata.get('phone'),
      isAdmin: Boolean(formdata.get('isAdmin')),
      isActive: Boolean(formdata.get('isActive')),
    }
    await updateUser(payload);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={user.img || "/user.png"} alt="user" fill />
          </div>
          {user.username}
        </div>
        <div className={styles.formContainer}>
          <form action={userUpdated} className={styles.form}>
            <label>Username</label>
            <input type="text" name='username' placeholder={user.username} />
            <label>Email</label>
            <input type="email" name='email' placeholder={user.email} />
            <label>Password</label>
            <input type="password" name='password' placeholder='password' />
            <label>Phone</label>
            <input type="phone" name='phone' placeholder={user.phone} />
            <label>Address</label>
            <textarea name="address" placeholder={user.address} />
            <label>Is Admin?</label>
            <select name='isAdmin' id='isAdmin'>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Is Active ?</label>
            <select name="isActive" id="isActive">
              <option value="true" selected={user.isActive}>Yes</option>
              <option value="false" selected={!user.isActive}>No</option>
            </select> 
            <button type='submit'>Update</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SingleUser