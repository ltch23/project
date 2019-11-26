import * as mongoose from 'mongoose';
const Joi = require('joi');
const joigoose = require('joigoose')(mongoose)


const joiSchema =  Joi.object().keys({
  rut: Joi.string().required(),
  rutChilen: Joi.string(),
  nombre: Joi.string(),
  apellido: Joi.string(),
  telefono: Joi.string(),
  sexo: Joi.string(),
  email: Joi.string().email().allow(''),
  dirrecciones: Joi.string(),
  nDirrecciones: Joi.string(),
});

export const UserSchema = new mongoose.Schema(joigoose.convert(joiSchema))

mongoose.model('Model', UserSchema)

