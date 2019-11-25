import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  rut: String,
  rut_chilen: String,
  nombre: String,
  apellido: String,
  telefono: String,
  sexo: String,
  email: String,
  dirrecciones: String,
  n_dirrecciones: Number,
});
