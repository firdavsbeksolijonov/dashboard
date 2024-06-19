import { connectToDb } from "./utils";
import { Product } from "./model";
import { IPRoductPromise, IPRoductAction } from './../app/types/product';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
export const fetchProducts = async (q: string, page: number): Promise<IPRoductPromise | undefined>  => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
    try {
        await connectToDb();
        const count = await Product.find({ title: regex }).countDocuments();
        const products = await Product.find({ title: regex }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE);
        return { products, count };   
    }catch(error){
        console.log(error, "error");
    }
}

export const getSingleProduct = async (id: string) => {
    try {
        await connectToDb();
        const products = await Product.findById(id);
        return products
    } catch (error) {
        console.log(error, "error");
    }
}


export const addNewProduct = async (payload: IPRoductAction) => {
    try {
        await connectToDb();
        const product = await Product.create(payload);
        product.save();
    } catch (error) {
        console.log(error, "error");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}


export const updateProduct = async (payload: IPRoductAction) => {
    try {
        connectToDb();
        await Product.findByIdAndUpdate(payload.id, payload);
    } catch (error) {
        console.log(error, "error");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}