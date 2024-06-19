import React from 'react'
import styles from "@/app/ui/dashboard/product/addProduct/addProduct.module.css"
import { addNewProduct } from '@/lib/productAction';
// import { log } from 'console';
const AddProduct = () => {
  const handleSubmit = async (formdata: FormData) => {
    "use server";

    let payload = {
      title: formdata.get('title'),
      desc: formdata.get('desc'),
      price: formdata.get('price'),
      color: formdata.get('color'),
      size: formdata.get('size'),
      cat: formdata.get('cat'), 
      stock: formdata.get('stock')
    }
    await addNewProduct(payload);
    console.log(payload);
    
  }
  return (
    <div className={styles.container}>
        <form action={handleSubmit} className={styles.form}>
            <input type="text" placeholder='title' name='title'  required/>
            <select name="cat" id="cat">
                <option value="general">Choose category</option>
                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
            </select>
            <input type="text" placeholder='price' name='price' required />
            <input type="text" placeholder='stock' name='stock' required />
            <input type="text" placeholder='color' name='color' />
            <input type="text" placeholder='size' name='size' />
            <textarea name="desc" id="desc"  rows={16} placeholder='description' required/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddProduct