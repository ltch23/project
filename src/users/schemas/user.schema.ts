import * as mongoose from 'mongoose';
const Joi = require('@hapi/joi');

export const UserSchema = new mongoose.Schema({
  rut: { type: String()},
  rutChilen: { type: String},
  nombre: { type: Joi.string().min(4)},
  apellido: { type: String},
  telefono: { type: String},
  sexo: { type: String},
  email: { type: Joi.string().email().allow('').default('xyz')},
  dirrecciones: { type: String},
  nDirrecciones: { type: Number},
});
