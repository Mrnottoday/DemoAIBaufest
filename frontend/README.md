# FlowOps Frontend

Aplicación web frontend construida con **React**, **TypeScript** y **Vite**, que consume los servicios de autenticación del backend FastAPI.

## Características

- **Página de Login**: Formulario de inicio de sesión que autentica contra el endpoint `/auth/login` del backend.
- **Página de Bienvenida**: Panel protegido que muestra información del usuario autenticado.
- **Protección de rutas**: No se puede acceder a la página de bienvenida sin haber iniciado sesión.
- **Gestión de sesión**: El token JWT se almacena en `sessionStorage` y se elimina al cerrar sesión.
- **Diseño FlowOps**: Interfaz que sigue el estándar de diseño definido en `DESIGN.md` (tipografía Inter, superficies glass, paleta de colores del sistema).

## Estructura del proyecto

```
frontend/
├── src/
│   ├── auth/
│   │   └── AuthContext.tsx      # Contexto de autenticación (login, logout, estado)
│   ├── components/
│   │   └── ProtectedRoute.tsx   # Componente para proteger rutas privadas
│   ├── pages/
│   │   ├── LoginPage.tsx        # Página de inicio de sesión
│   │   ├── LoginPage.module.css
│   │   ├── WelcomePage.tsx      # Página de bienvenida (protegida)
│   │   └── WelcomePage.module.css
│   ├── App.tsx                  # Configuración de rutas
│   ├── main.tsx                 # Punto de entrada
│   └── index.css                # Estilos globales y tokens de diseño
├── Dockerfile
├── nginx.conf
├── index.html
├── vite.config.ts
└── package.json
```

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- Backend ejecutándose en `http://localhost:8000` (ver carpeta `backend/`)

## Instalación y ejecución (desarrollo)

```bash
# Instalar dependencias
cd frontend
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`. El proxy de Vite redirige las peticiones `/auth/*` al backend en el puerto 8000.

## Ejecución con Docker Compose

Desde la raíz del proyecto:

```bash
docker compose up --build
```

Esto levanta ambos servicios:
- **Backend**: `http://localhost:8000`
- **Frontend**: `http://localhost:3000`

## Credenciales de prueba

| Usuario | Contraseña |
|---------|------------|
| admin   | admin123   |

## Uso

1. Abre la aplicación en el navegador (`http://localhost:5173` en desarrollo o `http://localhost:3000` con Docker).
2. Ingresa las credenciales en la pantalla de login.
3. Si las credenciales son correctas, serás redirigido a la página de bienvenida.
4. Desde la página de bienvenida puedes cerrar sesión con el botón "Cerrar Sesión".
5. Si intentas acceder directamente a `/welcome` sin sesión, serás redirigido al login.

## Scripts disponibles

| Comando           | Descripción                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Inicia el servidor de desarrollo     |
| `npm run build`   | Genera la build de producción        |
| `npm run preview` | Previsualiza la build de producción  |
