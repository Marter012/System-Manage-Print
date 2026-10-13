import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AppInitializer from "../../initialization/appInitializer.tsx";

import {
  ensureValidAccessToken,
  startTokenRefresh,
  stopTokenRefresh,
} from "../../services/authRefresh.ts";

import {
  SessionContainer,
  SessionCard,
  SessionLogo,
  SessionTitle,
  SessionDescription,
  SpinnerContainer,
  Spinner,
} from "./PrivateLayoutStyles.ts";

const PrivateLayout = () => {
  const navigate = useNavigate();

  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initializeSession = async () => {
      try {
        const isValid = await ensureValidAccessToken();

        if (!mounted) {
          return;
        }

        if (!isValid) {
          stopTokenRefresh();

          navigate("/login", {
            replace: true,
          });

          return;
        }

        startTokenRefresh();

        setAuthReady(true);
      } catch {
        if (!mounted) {
          return;
        }

        stopTokenRefresh();

        navigate("/login", {
          replace: true,
        });
      }
    };

    void initializeSession();

    return () => {
      mounted = false;
      stopTokenRefresh();
    };
  }, [navigate]);

  if (!authReady) {
    return (
      <SessionContainer>
        <SessionCard>
          <SessionLogo>BS</SessionLogo>

          <SessionTitle>Boutique de Sabores</SessionTitle>

          <SessionDescription>
            Estamos preparando todo para vos
          </SessionDescription>

          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>

          <span>Verificando tu sesión...</span>

          <SessionDescription>
            Un momento, por favor.
          </SessionDescription>
        </SessionCard>
      </SessionContainer>
    );
  }

  return (
    <AppInitializer>
      <Outlet />
    </AppInitializer>
  );
};

export default PrivateLayout;