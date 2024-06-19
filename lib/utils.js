import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
    try {
        if(connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO, {
            dbName: "test",
        });
        connection.isConnected = db.connections[0].readyState;
    }catch(error){
        console.log(error);
        throw new Error("Failed to connect to the database", error);
    }
}