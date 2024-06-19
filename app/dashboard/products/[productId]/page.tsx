import Image from 'next/image'
import React from 'react'
import styles from "@/app/ui/dashboard/product/singleProduct/singleProduct.module.css"
import { getSingleProduct, updateProduct } from '@/lib/productAction'
const SingleProduct = async ({ params }: { params: { productId: string } }) => {
    const { productId } = params
    const product = await getSingleProduct(productId)

    const productUpdated = async (formdata: FormData) => {
        "use server";
        let payload = {
            id: productId,
            title: formdata.get('title'),
            desc: formdata.get('desc'),
            price: formdata.get('price'),
            color: formdata.get('color'),
            size: formdata.get('size'),
            cat: formdata.get('cat'),
            stock: formdata.get('stock')
        }
        await updateProduct(payload);
    }
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={product.img || "/user.png"} alt="user" fill />
                </div>
                {product.title}
            </div>
            <div className={styles.formContainer}>
                <form action={productUpdated} className={styles.form}>
                    <label>Title</label>
                    <input type="text" name='title' placeholder={product.title} />
                    <label>Price</label>
                    <input type="text" name='price' placeholder={product.price} />
                    <label>Stock</label>
                    <input type="text" name='stock' placeholder={product.stock} />
                    <label>Color</label>
                    <input type="text" name='color' placeholder={product.color} />
                    <label>Size</label>
                    <textarea name="size" placeholder={product.size} />
                    <label>Cat</label>
                    <select name='cat' id='cat'>
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" rows={10} placeholder={product.desc} />
                    <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProduct