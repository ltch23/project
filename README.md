## REST API NestJs usando MongoDB (mlab)

# Espicificaciones
- CRUD en Nestjs meddiante el campo de id (MongoDB)
- Validaciones usamdo joi para el esquema de MongoDB. Por ejemplo campos que solo se permite numeros, letras o mail. El tamano permitido, si es unico, etc.
- Consulta por cada campo: "<nombreDeCampo>=<valor>". Por ejemplo: "nombre=Luis". Esta consulta retorna la lista.
- Para desplegar en Heroku el API es necesario conectar MongoDb a Mlab.
se usa mongoose to conectar y se especifica usuario y contrasena.
- La ruta es /users
# Instalacion
$ git clone 
$ npm install
$ npm run start
