import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import {
  LoginContainer,
  LoginCard,
  LoginLogo,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginError,
} from "./LoginStyles.ts";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ADMIN_USERNAME = "admin";
    const ADMIN_PASSWORD = "system";

    if (
      username !== ADMIN_USERNAME ||
      password !== ADMIN_PASSWORD
    ) {
      setError("Usuario o contraseña incorrectos.");
      setPassword("");
      return;
    }

    localStorage.setItem(
      "boutique_admin_authenticated",
      "true"
    );

    navigate("/", { replace: true });
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginLogo>BS</LoginLogo>

        <LoginTitle>Boutique de Sabores</LoginTitle>

        <LoginSubtitle>
          Acceso exclusivo para administradores
        </LoginSubtitle>

        <LoginForm onSubmit={handleSubmit}>
          <LoginLabel htmlFor="username">
            Usuario
          </LoginLabel>

          <LoginInput
            id="username"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              setError("");
            }}
            placeholder="Ingresá tu usuario"
            autoComplete="username"
            autoFocus
          />

          <LoginLabel htmlFor="password">
            Contraseña
          </LoginLabel>

          <LoginInput
            id="password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            placeholder="Ingresá tu contraseña"
            autoComplete="current-password"
          />

          {error && <LoginError>{error}</LoginError>}

          <LoginButton type="submit">
            Ingresar
          </LoginButton>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;