import { IUserPromise, IUserAction } from './../app/types/users';
import { connectToDb } from "./utils";
import { User } from "./model";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export const fetchUsers = async (q: string, page: number): Promise<IUserPromise | undefined> => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
    try {
        await connectToDb();
        const count = await User.find({ username: regex }).countDocuments();
        const users = await User.find({ username: regex }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE);
        return { users, count };
    } catch (error) {
        console.log(error, "error");
    }
};

export const getSingleUser = async (id: string) => {
    try {
        await connectToDb();
        const users = await User.findById(id);
        return users
    } catch (error) {
        console.log(error, "error");
    }
}

export const addNewUser = async (payload: IUserAction) => {
    try {
        await connectToDb();
        const user = await User.create(payload);
        user.save();
    } catch (error) {
        console.log(error, "error");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const updateUser = async (payload: IUserAction) => {
    try {
        connectToDb();
        await User.findByIdAndUpdate(payload.id, payload);
    } catch (error) {
        console.log(error, "error");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}