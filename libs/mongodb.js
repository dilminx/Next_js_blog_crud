import mongoose from "mongoose";

let isConnected = false; // Track the connection status

const connectMongoDb = async () => {
    if (isConnected) {
        console.log("Already connected to the database");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        isConnected = db.connections[0].readyState === 1;
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log("Connection error: " + e.message);
    }
};

export default connectMongoDb;
