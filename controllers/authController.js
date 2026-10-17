import Persona from "../models/Persona.js";

export const mostrarRegistro = (req, res) => {
  res.renderer("registro", { titulo: "Crear cuenta" });
};

export const procesarRegistro = async (req, res) => {
  const nombre = typeof req.body?.nombre === "string" ? req.body.nombre.trim() : "";
  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const password = typeof req.body?.password === "string" ? req.body.password : "";
  const tipo = typeof req.body?.tipo === "string" ? req.body.tipo.trim() : "";

  if (!nombre || !email || !password || !tipo) {
    return res.status(400).render("Nombre, email, contraseña y tipo son obligatorios");
  }

  if (!["donante", "responsable"].includes(tipo)) {
    return res.status(400).render("El tipo debe ser 'donante' o 'responsable'");
  }

  try {
    const personaExistente = await Persona.findOne({ email });
    if (personaExistente) {
      return res.status(400).render("Ya existe una cuenta registrada con ese email");
    }

    const nuevaPersona = new Persona({ nombre, email, password, tipo });
    await nuevaPersona.save();

    return res.redirect("/login");
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).render("Ya existe una cuenta registrada con ese email");
    }

    if (error.name === "ValidationError") {
      return res.status(400).render(error.message);
    }

    return res.status(500).render("Error al procesar el registro: " + error.message);
  }
};