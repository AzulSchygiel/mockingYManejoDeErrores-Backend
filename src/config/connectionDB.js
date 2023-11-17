import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect("contraseña de mongodb");
        console.log('Base de datos conectada exitosamente');
    } catch (error) {
        console.log(`ERROR de conexión con la base de datos ${error.message}`);
    }
};