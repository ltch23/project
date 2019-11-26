import * as mongoose from 'mongoose';


export interface UserModel extends mongoose.Document{
    rut: string;
    rutChilen: string;
    nombre: string;
    apellido: string;
    telefono: string;
    sexo: string;
    email: string;
    dirrecciones: string;
    ndirrecciones: number;
    
}