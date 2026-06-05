import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface AuthState {
  accessToken: string;
  refreshToken: string;
  username: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState | null>(() => {
    const stored = sessionStorage.getItem('auth');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  });

  const login = useCallback(async (username: string, password: string) => {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Error de conexión' }));
      throw new Error(error.detail || 'Usuario o contraseña incorrectos');
    }

    const data = await response.json();
    const authState: AuthState = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      username,
    };
    sessionStorage.setItem('auth', JSON.stringify(authState));
    setAuth(authState);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem('auth');
    setAuth(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: auth !== null,
        username: auth?.username ?? null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
