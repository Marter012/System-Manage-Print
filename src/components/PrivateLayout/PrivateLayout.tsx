import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AppInitializer from "../../initialization/appInitializer.tsx";

import {
  ensureValidAccessToken,
  startTokenRefresh,
  stopTokenRefresh,
} from "../../services/authRefresh.ts";

const PrivateLayout = () => {
  const navigate = useNavigate();

  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initializeSession = async () => {
      const isValid = await ensureValidAccessToken();

      if (!isValid) {
        stopTokenRefresh();

        if (mounted) {
          navigate("/login", {
            replace: true,
          });
        }

        return;
      }

      if (!mounted) {
        return;
      }

      startTokenRefresh();

      setAuthReady(true);
    };

    void initializeSession();

    return () => {
      mounted = false;

      stopTokenRefresh();
    };
  }, [navigate]);

  if (!authReady) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "inherit",
          color: "#653007",
        }}
      >
        Verificando sesión...
      </div>
    );
  }

  return (
    <AppInitializer>
      <Outlet />
    </AppInitializer>
  );
};

export default PrivateLayout;