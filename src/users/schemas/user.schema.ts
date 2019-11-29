import * as mongoose from 'mongoose';
const Joi = require('joi');
const joigoose = require('joigoose')(mongoose)


const joiSchema =  Joi.object().keys({
  rut: Joi.string().regex(/^[0-9]+$/).min(8) ,
  rutChilen: Joi.string().regex(/^[0-9]+$/).min(8),
  nombre: Joi.string().regex(/^[a-zA-Z]+$/),
  apellido: Joi.string().regex(/^[a-zA-Z]+$/),
  telefono: Joi.string().regex(/^[0-9]+$/).allow(''),
  sexo: Joi.string().regex(/^[a-zA-Z]+$/),
  email: Joi.string().email().allow(''),
  dirrecciones: Joi.array().items(Joi.string()),
  nDirrecciones: Joi.number(),
});

export const UserSchema = new mongoose.Schema(joigoose.convert(joiSchema))

mongoose.model('Model', UserSchema)

