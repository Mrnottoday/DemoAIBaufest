# JWT Authentication API

API de autenticación basada en **JWT (JSON Web Tokens)** construida con **FastAPI** y **Python**.

## Características

- Endpoint de login que genera un **access token** (expiración: 300 segundos) y un **refresh token** (expiración: 24 horas).
- Endpoint para **refrescar** el access token usando un refresh token válido.
- Hashing de contraseñas con **bcrypt** mediante `passlib`.
- Gestión de dependencias con **Poetry**.
- Despliegue con **Docker** y **Docker Compose**.

## Estructura del proyecto

```
backend/
├── app/
│   ├── __init__.py
│   ├── auth.py        # Lógica de autenticación y generación de tokens
│   ├── config.py      # Configuración (secret key, tiempos de expiración)
│   ├── main.py        # Aplicación FastAPI y endpoints
│   └── models.py      # Modelos Pydantic (request/response)
├── Dockerfile
├── pyproject.toml     # Dependencias (Poetry)
└── README.md
```

## Requisitos previos

- Python 3.11+
- [Poetry](https://python-poetry.org/docs/#installation)
- Docker y Docker Compose (opcional, para despliegue con contenedores)

## Instalación local

1. Navegar a la carpeta `backend`:

   ```bash
   cd backend
   ```

2. Instalar las dependencias con Poetry:

   ```bash
   poetry install
   ```

3. Ejecutar la aplicación:

   ```bash
   poetry run uvicorn app.main:app --reload
   ```

   La API estará disponible en `http://localhost:8000`.

## Despliegue con Docker

Desde la raíz del proyecto (donde se encuentra `docker-compose.yml`):

```bash
docker-compose up --build
```

La API estará disponible en `http://localhost:8000`.

## Endpoints

### `POST /auth/login`

Autentica al usuario y devuelve los tokens.

**Request body:**

```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response (200 OK):**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "token_type": "bearer"
}
```

**Response (401 Unauthorized):**

```json
{
  "detail": "Usuario o contraseña incorrectos"
}
```

### `POST /auth/refresh`

Genera un nuevo access token a partir de un refresh token válido.

**Request body:**

```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

**Response (200 OK):**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "token_type": "bearer"
}
```

**Response (401 Unauthorized):**

```json
{
  "detail": "Refresh token inválido o expirado"
}
```

### `GET /health`

Health check del servicio.

**Response (200 OK):**

```json
{
  "status": "ok"
}
```

## Documentación interactiva

FastAPI genera documentación automática:

- **Swagger UI:** [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc:** [http://localhost:8000/redoc](http://localhost:8000/redoc)

## Ejemplo de uso con cURL

### Login

```bash
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

### Refresh token

```bash
curl -X POST http://localhost:8000/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refresh_token": "<TU_REFRESH_TOKEN>"}'
```

## Configuración

Las siguientes variables de entorno pueden configurarse:

| Variable     | Descripción                     | Valor por defecto                                              |
| ------------ | ------------------------------- | -------------------------------------------------------------- |
| `SECRET_KEY` | Clave secreta para firmar JWTs  | `09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7` |

## Credenciales de prueba

| Usuario | Contraseña |
| ------- | ---------- |
| `admin` | `admin123` |
