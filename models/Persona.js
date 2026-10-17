import mongoose from "mongoose";

const personaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El email institucional es obligatorio"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [6, "La contraseña debe tener al menos 6 caracteres"],
    },
    tipo: {
      type: String,
      required: [true, "El tipo es obligatorio"],
      enum: {
        values: ["donante", "responsable"],
        message: "El tipo debe ser 'donante' o 'responsable'",
      },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Persona", personaSchema);
