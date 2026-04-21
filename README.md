# ⚙️ Proyecto Gimnasio - BackEnd

API robusta que alimenta el sistema de gestión del gimnasio Rolling Gym. Maneja la autenticación, el registro de usuarios, el catálogo de productos y la administración de las clases.

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con las siguientes herramientas:

* **Core:** Node.js y Express
* **Base de Datos:** MongoDB Atlas y Mongoose
* **Seguridad y Autenticación:** JWT (JSON Web Token) y CORS

## 🚀 Instalación y Configuración Local

Si querés levantar este proyecto en tu computadora, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/PCruzado/ProyectoGimnasio-BackEnd.git](https://github.com/PCruzado/ProyectoGimnasio-BackEnd.git)

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

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/productos` | Obtiene la lista de todos los productos. | Público |
| **POST** | `/api/productos` | Crea un nuevo producto en la base de datos. | Admin |
| **PUT** | `/api/productos/:id` | Actualiza los datos de un producto existente. | Admin |
| **DELETE** | `/api/productos/:id` | Elimina un producto por su ID. | Admin |

### Nota: 
| Código | Significado | Descripción |
| :---: | :--- | :--- |
| **200 / 204** | Éxito | La petición se completó correctamente. |
| **201** | Creado | El recurso se creó con éxito en la base de datos. |
| **400** | Bad Request | Error en los datos enviados o faltan campos obligatorios. |
| **401** | Unauthorized | El token de autenticación es inválido o no se proporcionó. |
| **404** | Not Found | El ID proporcionado en la ruta no existe en la base de datos. |
| **500** | Internal Server Error | Error interno del servidor o falla en la conexión con la base de datos. |

## 👥 Equipo de Desarrollo
- Marcos Lautaro Molina
- Facundo Javier Vera
- Pablo Cruzado
- Nicolas Bulacio
