# ⚙️ Proyecto Gimnasio - BackEnd

API robusta que alimenta el sistema de gestión del gimnasio Rolling Gym. Maneja la autenticación, el registro de usuarios, el catálogo de productos y la administración de las clases.

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con las siguientes herramientas:

- **Core:** Node.js y Express
- **Base de Datos:** MongoDB Atlas y Mongoose
- **Seguridad y Autenticación:** JWT (JSON Web Token) y CORS

## 🚀 Instalación y Configuración Local

Si querés levantar este proyecto en tu computadora, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/PCruzado/ProyectoGimnasio-BackEnd.git](https://github.com/PCruzado/ProyectoGimnasio-BackEnd.git)
   ```

## Ingresar a la carpeta del proyecto:

```bash
cd ProyectoGimnasio-BackEnd
```

## Instalar las dependencias:

```bash
npm install
```

## Variables de Entorno:

Crea un archivo llamado .env en la raíz del proyecto y agregá lo siguiente con tus datos (no incluyas tus contraseñas reales al subir a GitHub):

```bash
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta
PORT=4000
```

## Levantar el servidor de desarrollo:

```bash
npm run dev
```

## Endpoints Principales

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

### Crear Registro de Usuario

Podemos crear un usuario enviando una solicitud del siguiente tipo:

- URL: http://localhost:4000/api/usuarios/registro
- method: POST
- headers: Content-Type: application/json
- body:

```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan.perez@email.com",
  "contrasena": "Password123"
}
```

### Inicio de Sesión de Usuario

Podemos iniciar sesión enviando una solicitud del siguiente tipo:

- URL: http://localhost:4000/api/usuarios/login
- method: POST
- headers: Content-Type: application/json
- body:

```json
{
  "email": "juan.perez@email.com",
  "contrasena": "Password123"
}
```

### Crear Producto

Podemos crear un producto enviando una solicitud del siguiente tipo:

- URL: http://localhost:4000/api/productos
- method: POST
- headers: Content-Type: application/json
- body:

```json
{
  "nombre": "Proteína Whey Premium",
  "precio": 15000,
  "categoria": "Suplementos",
  "imagen": "https://midominio.com/imagen.jpg",
  "descripcion": "Proteína de alta calidad.",
  "stock": 50
}
```

### Actualizar Producto

Podemos actualizar un producto enviando una solicitud del siguiente tipo:

- URL: http://localhost:4000/api/productos/:id
- method: PUT
- headers: Content-Type: application/json
- body:

```json
{
  "nombre": "Proteína Whey Premium",
  "precio": 14000,
  "categoria": "Suplementos",
  "imagen": "https://midominio.com/imagen.jpg",
  "descripcion": "Proteína en oferta."
}
```

### Crear Clase

Podemos crear una clase enviando una solicitud del siguiente tipo:

- URL: http://localhost:4000/api/clases
- method: POST
- headers: Content-Type: application/json
- body:

```json
{
  "nombreClase": "Yoga Inicial",
  "profesor": "Lucía Torres",
  "fecha": "2026-05-15",
  "horario": "18:00"
}
```

### Actualizar Clase (PUT)

Podemos actualizar una clase enviando una solicitud del siguiente tipo:

- URL: http://localhost:4000/api/clases/:id
- method: PUT
- headers: Content-Type: application/json
- body:

```json
{
  "nombreClase": "Yoga Avanzado",
  "profesor": "Lucía Torres",
  "fecha": "2026-05-15",
  "horario": "19:00"
}
```

### Eliminación de Clase (DELETE)

Ruta: /api/clases/:id

Parámetros: Se requiere el ID de la clase en la URL.

### Códigos de Respuesta HTTP:

|    Código     | Significado           | Descripción                                                             |
| :-----------: | :-------------------- | :---------------------------------------------------------------------- |
| **200 / 204** | Éxito                 | La petición se completó correctamente.                                  |
|    **201**    | Creado                | El recurso se creó con éxito en la base de datos.                       |
|    **400**    | Bad Request           | Error en los datos enviados o faltan campos obligatorios.               |
|    **401**    | Unauthorized          | El token de autenticación es inválido o no se proporcionó.              |
|    **404**    | Not Found             | El ID proporcionado en la ruta no existe en la base de datos.           |
|    **500**    | Internal Server Error | Error interno del servidor o falla en la conexión con la base de datos. |

## 👥 Equipo de Desarrollo

- Marcos Lautaro Molina
- Facundo Javier Vera
- Pablo Cruzado
- Nicolas Bulacio
