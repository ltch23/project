import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  rut: String,
  rutChilen: String,
  nombre: String,
  apellido: String,
  telefono: String,
  sexo: String,
  email: String,
  dirrecciones: String,
  nDirrecciones: Number,
});
