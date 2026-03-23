 Rolling Gym - Backend API
Esta es la API robusta que alimenta el sistema de gestión del gimnasio Rolling Gym. Proporciona servicios de autenticación, gestión de usuarios, catálogo de productos y administración de clases.

 Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.

Express: Framework para la creación de la API REST.

MongoDB Atlas: Base de datos NoSQL basada en la nube.

Mongoose: Modelado de objetos para la base de datos.

JWT (JSON Web Token): Manejo de autenticación y autorización segura.

CORS: Configuración de seguridad para permitir peticiones desde el Frontend en Netlify.

 Estructura del Proyecto
El proyecto sigue el patrón MVC (Modelo-Vista-Controlador) para garantizar la escalabilidad:

/config: Configuración de la conexión a la base de datos.

/controllers: Lógica de negocio y manejo de peticiones.

/models: Definición de los esquemas de Mongoose (Usuarios, Clases, Productos).

/routes: Definición de los endpoints de la API.

/middleware: Filtros de seguridad (Autenticación y validación de roles).

 Instalación y Configuración
Clonar el repositorio:
git clone https://github.com/PCruzado/ProyectoGimnasio-BackEnd.git

Instalar dependencias:
npm install

Configurar variables de entorno (.env):
Crea un archivo .env en la raíz con lo siguiente:

Fragmento de código
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta
PORT=4000
Ejecutar en desarrollo:
npm run dev

 Endpoints Principales
Usuarios
POST /api/usuarios/registro: Crear una cuenta nueva.

POST /api/usuarios/login: Obtener el token de acceso.

GET /api/usuarios: Obtener lista de usuarios (Solo Admin).

Productos y Clases
GET /api/productos: Ver catálogo completo.

POST /api/productos: Crear nuevo producto (Solo Admin).

PUT /api/productos/:id: Editar producto existente (Solo Admin).

DELETE /api/productos/:id: Eliminar producto (Solo Admin).
