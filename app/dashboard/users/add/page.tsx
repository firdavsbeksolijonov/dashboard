import React from 'react'
import styles from '@/app/ui/dashboard/users/addUsers/addUsers.module.css'
import { addNewUser } from '@/lib/userAction';
const AddUser = () => {
  const handleAction = async (formdata: FormData) => {
    "use server";
    let payload = {
      username: formdata.get('username'),
      email: formdata.get('email'),
      password: formdata.get('password'),
      phone: formdata.get('phone'),
      isAdmin: Boolean(formdata.get('isAdmin')),
      isActive: Boolean(formdata.get('isActive')),
      address: formdata.get('address')
    }
    await addNewUser(payload);
  };
  return (
    <div className={styles.container}>
      <form action={handleAction} className={styles.form}>
        <input type={"text"} name='username' placeholder='username' required />
        <input type={"email"} name='email' placeholder='email' required />
        <input
          type="password"
          placeholder='password'
          name='password'
          required
        />
        <input type="phone" name="phone" placeholder='phone' />
        <select name="isAdmin" id="isAdmin">
          <option value="false">Is Admin</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="true">Is Active</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea name="address" id="address" rows={16} placeholder='address'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUser