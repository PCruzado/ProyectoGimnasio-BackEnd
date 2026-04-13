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


2.  **Ingresar a la carpeta del proyecto:**

    ```bash
    cd ProyectoGimnasio-BackEnd
    ```

3.  **Instalar las dependencias:**

    ```bash
    npm install
    ```


4.  **Levantar el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

## 🌐 Endpoints Principales (Resumen)

| Recurso | Rutas Principales | Acceso |
| :--- | :--- | :--- |
| **Usuarios** | `POST /api/usuarios/registro` <br> `POST /api/usuarios/login` | Público |
| **Productos** | `GET /api/productos` <br> `POST, PUT, DELETE /api/productos/:id` | Público (GET) / Admin |
| **Clases** | `GET /api/clases` <br> `POST, PUT, DELETE /api/clases/:id` | Público (GET) / Admin |

## 👥 Equipo de Desarrollo

  * Marcos Lautaro Molina
  * Facundo Javier Vera
  * Pablo Cruzado
  * Nicolas Bulacio
