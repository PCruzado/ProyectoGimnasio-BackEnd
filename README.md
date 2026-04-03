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
POST /api/usuarios/registro: Crear una cuenta nueva.(Publico)

POST /api/usuarios/login: Obtener el token de acceso.(Publico)

GET /api/usuarios: Obtener lista de usuarios (Solo Admin).

Productos 
GET /api/productos: Ver catálogo completo.(Publico)

POST /api/productos: Crear nuevo producto (Solo Admin).

PUT /api/productos/:id: Editar producto existente (Solo Admin).

DELETE /api/productos/:id: Eliminar producto de la base de datos (Solo Admin).

Clases
GET /api/clases: Ver lista de clases y horarios.(Publico)

POST /api/clases: Crear una clase nueva.(Solo Admin)

PUT /api/clases:id Actualizar datos de una clase.(Solo Admin)

DELETE /api/clases/:id Eliminar una clase de la base de datos.(Solo Admin)


Actualización de Clase (PUT)

Ruta: /api/clases/:id

Body requerido (JSON):
{
  "nombreClase": "Yoga",
  "profesor": "Lucía Torres",
  "fecha": "2026-05-15",
  "horario": "18:00"
}

Eliminación de Clase (DELETE)

Ruta: /api/clases/:id

Parámetros: Se requiere el ID de la clase en la URL.

Códigos de Respuesta
La API responde con los siguientes estados estándar:

Código	      Significado	        Descripción
200 / 204	   Éxito	        La petición se completó correctamente.
201	           Creado	        El recurso (Usuario/Producto/Clase) se creó con éxito.
400	           Bad Request	    Error en los datos enviados o campos obligatorios faltantes.
401	           Unauthorized	    El token es inválido o no se proporcionó.
404	           Not Found	    El ID proporcionado no existe en la base de datos.
500	           Error	        Error interno del servidor o de conexión con la base de datos.

