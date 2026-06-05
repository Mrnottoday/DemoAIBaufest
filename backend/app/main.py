from fastapi import FastAPI, HTTPException, status

from app.auth import (
    authenticate_user,
    create_access_token,
    create_refresh_token,
    decode_refresh_token,
)
from app.models import (
    LoginRequest,
    Token,
    TokenRefreshRequest,
    TokenRefreshResponse,
)

app = FastAPI(
    title="JWT Authentication API",
    description="API de autenticación con JWT usando FastAPI",
    version="1.0.0",
)


@app.post("/auth/login", response_model=Token)
def login(request: LoginRequest):
    """Autentica al usuario y devuelve un access token y un refresh token."""
    user = authenticate_user(request.username, request.password)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Usuario o contraseña incorrectos",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user["username"]})
    refresh_token = create_refresh_token(data={"sub": user["username"]})
    return Token(access_token=access_token, refresh_token=refresh_token)


@app.post("/auth/refresh", response_model=TokenRefreshResponse)
def refresh_token(request: TokenRefreshRequest):
    """Genera un nuevo access token a partir de un refresh token válido."""
    username = decode_refresh_token(request.refresh_token)
    if username is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Refresh token inválido o expirado",
            headers={"WWW-Authenticate": "Bearer"},
        )
    new_access_token = create_access_token(data={"sub": username})
    return TokenRefreshResponse(access_token=new_access_token)


@app.get("/health")
def health():
    """Health check del servicio."""
    return {"status": "ok"}
