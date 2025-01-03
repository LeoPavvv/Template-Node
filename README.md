# Proyecto Base - Node.js

Este repositorio contiene la estructura base de un proyecto Node.js con las carpetas y configuraciones iniciales necesarias para desarrollar una aplicación web utilizando las siguientes tecnologías y dependencias:

## Tecnologías y Dependencias

- **Node.js**: Entorno de ejecución de JavaScript en el servidor.
- **Express**: Framework para la creación de aplicaciones web.
- **Sequelize**: ORM para manejar bases de datos SQL.
- **EJS**: Motor de plantillas para generar contenido HTML dinámico.
- **CORS**: Middleware para gestionar solicitudes de recursos entre dominios.
- **cookie-parser**: Middleware para analizar cookies.
- **jsonwebtoken**: Biblioteca para manejar tokens JWT para autenticación.
- **sqlite3**: La dependencia sqlite3 es un motor de base de datos ligero para aplicaciones pequeñas.

## Estructura del Proyecto

```
project/
├── config/                # Configuraciones generales del proyecto (base de datos, variables de entorno, etc.)
│   └── database.js        # Configuración de Sequelize para la conexión con la base de datos
├── controllers/           # Controladores para manejar las solicitudes y respuestas
├── middlewares/           # Middlewares personalizados
├── models/                # Definición de modelos de Sequelize
├── public/                # Archivos estáticos como CSS, JS, imágenes
├── routes/                # Definición de las rutas de la aplicación
├── services/              # Lógica de negocio o interacciones con los modelos
├── views/                 # Plantillas EJS para las vistas
├── .env                   # Variables de entorno (no incluido en el repositorio)
├── .gitignore             # Archivos y carpetas ignorados por Git
├── package.json           # Archivo de configuración de npm
├── package-lock.json      # Archivo de bloqueo de dependencias
└── app.js                 # Punto de entrada de la aplicación
```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/proyecto-base-node.git
   cd proyecto-base-node
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
     ```env
     DB_HOST=localhost
     DB_USER=tu_usuario
     DB_PASSWORD=tu_contraseña
     DB_NAME=nombre_de_la_base
     DB_DIALECT=mysql  # O el dialecto que estés usando (mysql, postgres, sqlite, etc.)
     JWT_SECRET=tu_secreto_para_jwt
     PORT=3000
     ```

4. Inicializa la base de datos:
   - Si estás usando Sequelize, asegúrate de que la base de datos esté configurada y ejecuta:
     ```bash
     npx sequelize-cli db:migrate
     ```

## Uso

1. Inicia el servidor:
   ```bash
   npm start
   ```

2. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en ejecución.

## Funcionalidades Iniciales

Este proyecto base incluye:

- Configuración inicial de Sequelize con soporte para múltiples bases de datos.
- Middleware preconfigurado para CORS, cookies y JSON Web Tokens.
- Estructura modular para escalabilidad y mantenimiento del código.
- Motor de plantillas EJS configurado.

## Contribución

1. Crea un fork del proyecto.
2. Crea una nueva rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Añadida nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un pull request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.

---

¡Listo! Ahora puedes usar esta estructura para comenzar a desarrollar tu aplicación.

