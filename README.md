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

🌐 Endpoints PrincipalesRecursoRutas PrincipalesAccesoUsuariosPOST /api/usuarios/registroPOST /api/usuarios/loginPúblicoProductosGET /api/productosPOST, PUT, DELETE /api/productos/:idPúblico (GET) / AdminClasesGET /api/clasesPOST, PUT, DELETE /api/clases/:idPúblico (GET) / Admin📝 Ejemplos de Peticiones (Body JSON)Para las peticiones de creación (POST) o actualización (PUT), es necesario enviar los datos en formato JSON.Ejemplo para crear o actualizar una Clase (/api/clases):JSON{ 
  "nombreClase": "Yoga", 
  "profesor": "Lucía Torres", 
  "fecha": "2026-05-15", 
  "horario": "18:00" 
}
Nota: Para los métodos PUT y DELETE es necesario pasar el ID del recurso por la URL (ej: /api/clases/12345).📡 Códigos de Respuesta HTTPLa API devuelve los siguientes códigos de estado para facilitar el manejo de peticiones desde el Frontend:CódigoSignificadoDescripción200 / 204ÉxitoLa petición se completó correctamente.201CreadoEl recurso se creó con éxito en la base de datos.400Bad RequestError en los datos enviados o faltan campos obligatorios.401UnauthorizedEl token de autenticación es inválido o no se proporcionó.404Not FoundEl ID proporcionado en la ruta no existe en la base de datos.500Internal Server ErrorError interno del servidor o falla en la conexión con la base de datos.

👥 Equipo de Desarrollo
- Marcos Lautaro Molina
- Facundo Javier Vera
- Pablo Cruzado
- Nicolas Bulacio
