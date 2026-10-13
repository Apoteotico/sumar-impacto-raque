import mongoose from "mongoose";

export const conectarDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("Falta la variable de entorno MONGO_URI en el archivo .env");
    }
    const conexion = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB conectado exitosamente en: ${conexion.connection.host}:${conexion.connection.port}/${conexion.connection.name}`);
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};
