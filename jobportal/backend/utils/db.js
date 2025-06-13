import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://muhammadwaleed8802:waleed1234@cluster0.xvs8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;