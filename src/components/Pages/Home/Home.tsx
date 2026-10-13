import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBoxOpen,
  FaCashRegister,
  FaClipboardList,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { getMe, logout, type User } from "../../../services/authService.ts";
import { api } from "../../../services/api.ts";
import { ContainerPage } from "../PageStyles.ts";
import ManageUser from "../../ManageUsers/ManageUser.tsx";
import {
  HomeHeader,
  HeaderContent,
  Greeting,
  UserBadge,
  UserAvatar,
  UserDetails,
  UserName,
  UserEmail,
  LogoutButton,
  Intro,
  IntroTitle,
  IntroText,
  QuickActions,
  ActionItem,
  ActionIcon,
  ActionContent,
  ActionNumber,
  ActionTitle,
  ActionDescription,
  Workflow,
  WorkflowHeader,
  WorkflowTitle,
  WorkflowDescription,
  WorkflowSteps,
  WorkflowStep,
  WorkflowIcon,
  WorkflowArrow,
  Tip,
  OutOfStockCard,
  SettingCopy,
  SettingControl,
  SettingStatus,
  ActivityPanel,
  ActivityList,
  ActivityRow,
} from "./HomeStyles.ts";

type ActivityEntry = {
  id: string;
  actor_username: string;
  action: string;
  resource: string;
  details: string;
  created_at: string;
};

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [allowOutOfStock, setAllowOutOfStock] = useState(false);
  const [settingsLoading, setSettingsLoading] = useState(true);
  const [settingsSaving, setSettingsSaving] = useState(false);
  const [settingsError, setSettingsError] = useState("");
  const [activity, setActivity] = useState<ActivityEntry[]>([]);
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    void getMe()
      .then(setUser)
      .catch((error) => console.error("Error obteniendo información del usuario:", error));
  }, []);

  useEffect(() => {
    if (user?.role !== "admin") {
      if (user) setSettingsLoading(false);
      return;
    }

    setSettingsLoading(true);
    void api
      .get("/settings/")
      .then((response) => setAllowOutOfStock(Boolean(response.data.allow_out_of_stock)))
      .catch(() => setSettingsError("No se pudo cargar la configuración."))
      .finally(() => setSettingsLoading(false));
    void api
      .get("/audit/")
      .then((response) => setActivity(response.data))
      .catch(() => setActivity([]));
  }, [user]);

  const toggleOutOfStock = async () => {
    setSettingsSaving(true);
    setSettingsError("");
    try {
      const response = await api.put("/settings/", {
        allow_out_of_stock: !allowOutOfStock,
      });
      setAllowOutOfStock(Boolean(response.data.allow_out_of_stock));
    } catch {
      setSettingsError("No se pudo guardar. Revisá tu conexión e intentá de nuevo.");
    } finally {
      setSettingsSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const initial = user?.username?.charAt(0).toUpperCase() || "U";

  return (
    <ContainerPage className="home-page">
      <HomeHeader>
        <HeaderContent>
          <Greeting>
            <span>Panel principal</span>
            <h1>Hola, {user?.username || "usuario"} 👋</h1>
            <p>Gestioná Boutique de Sabores desde un solo lugar.</p>
          </Greeting>

          {isAdmin && (
            <OutOfStockCard aria-labelledby="out-of-stock-title">
              <SettingCopy>
                <h2 id="out-of-stock-title">Ventas sin stock</h2>
                <p>Permite vender aunque no alcance el stock. Mientras esté activado, las ventas no descuentan ni modifican el inventario; si la venta supera el disponible, se pedirá confirmar con cocina.</p>
                <SettingStatus role="status" aria-live="polite" $enabled={allowOutOfStock}>
                  {settingsError || (allowOutOfStock ? "Permiso activado" : "Permiso desactivado")}
                </SettingStatus>
              </SettingCopy>
              <SettingControl
                type="button"
                $enabled={allowOutOfStock}
                aria-pressed={allowOutOfStock}
                disabled={settingsLoading || settingsSaving}
                onClick={() => void toggleOutOfStock()}
              >
                <span>{settingsSaving ? "Guardando…" : settingsLoading ? "Cargando…" : allowOutOfStock ? "Activado" : "Activar"}</span>
                <span className="switch" aria-hidden="true" />
              </SettingControl>
            </OutOfStockCard>
          )}

          <UserBadge>
            <div className="user-info">
              <UserAvatar>{initial}</UserAvatar>
              <UserDetails>
                <UserName>{user?.username || "Usuario"}</UserName>
                <UserEmail>{user?.email || "Cargando usuario…"}</UserEmail>
              </UserDetails>
            </div>
            <div className="user-actions">
              {isAdmin && (
                <LogoutButton type="button" onClick={() => setShowUserManagement(true)} title="Gestión de usuarios">
                  <FaUsers /><span>Usuarios</span>
                </LogoutButton>
              )}
              <LogoutButton type="button" onClick={handleLogout} title="Cerrar sesión">
                <FaSignOutAlt /><span>Salir</span>
              </LogoutButton>
            </div>
          </UserBadge>
        </HeaderContent>
      </HomeHeader>

      <Intro>
        <IntroTitle>¿Qué querés hacer?</IntroTitle>
        <IntroText>Accesos rápidos para las tareas habituales.</IntroText>
      </Intro>

      <QuickActions>
        <ActionItem>
          <ActionIcon><FaCashRegister /></ActionIcon>
          <ActionContent><ActionNumber>01</ActionNumber><ActionTitle>Abrir caja</ActionTitle><ActionDescription>Iniciá el turno y registrá el dinero.</ActionDescription></ActionContent>
        </ActionItem>
        <ActionItem>
          <ActionIcon><FaClipboardList /></ActionIcon>
          <ActionContent><ActionNumber>02</ActionNumber><ActionTitle>Nueva comanda</ActionTitle><ActionDescription>Cargá productos y promociones.</ActionDescription></ActionContent>
        </ActionItem>
        <ActionItem>
          <ActionIcon><FaClipboardList /></ActionIcon>
          <ActionContent><ActionNumber>03</ActionNumber><ActionTitle>Registrar venta</ActionTitle><ActionDescription>Elegí el método de pago.</ActionDescription></ActionContent>
        </ActionItem>
        <ActionItem>
          <ActionIcon><FaBoxOpen /></ActionIcon>
          <ActionContent><ActionNumber>04</ActionNumber><ActionTitle>Revisar ventas</ActionTitle><ActionDescription>Consultá comandas y movimientos.</ActionDescription></ActionContent>
        </ActionItem>
      </QuickActions>

      <Workflow>
        <WorkflowHeader>
          <div><WorkflowTitle>Flujo de trabajo</WorkflowTitle><WorkflowDescription>Pasos habituales de una venta.</WorkflowDescription></div>
        </WorkflowHeader>
        <WorkflowSteps>
          <WorkflowStep><WorkflowIcon><FaCashRegister /></WorkflowIcon><span>Abrir caja</span></WorkflowStep>
          <WorkflowArrow><FaArrowRight /></WorkflowArrow>
          <WorkflowStep><WorkflowIcon><FaClipboardList /></WorkflowIcon><span>Comanda</span></WorkflowStep>
          <WorkflowArrow><FaArrowRight /></WorkflowArrow>
          <WorkflowStep><WorkflowIcon><FaBoxOpen /></WorkflowIcon><span>Venta</span></WorkflowStep>
          <WorkflowArrow><FaArrowRight /></WorkflowArrow>
          <WorkflowStep><WorkflowIcon><FaCashRegister /></WorkflowIcon><span>Cerrar caja</span></WorkflowStep>
        </WorkflowSteps>
      </Workflow>

      {isAdmin && (
        <ActivityPanel>
          <h2>Última actividad</h2>
          <ActivityList>
            {activity.slice(0, 1).map((entry) => (
              <ActivityRow key={entry.id}>
                <strong>{entry.actor_username}</strong>
                <span>{entry.action} · {entry.resource} {entry.details}</span>
                <time>{new Date(entry.created_at).toLocaleString("es-AR")}</time>
              </ActivityRow>
            ))}
            {activity.length === 0 && <p>Sin actividad reciente.</p>}
          </ActivityList>
        </ActivityPanel>
      )}

      <Tip><span>💡</span><div><strong>Recordatorio</strong><p>Antes de registrar una venta, asegurate de tener la caja abierta.</p></div></Tip>

      {isAdmin && <ManageUser isOpen={showUserManagement} onClose={() => setShowUserManagement(false)} />}
    </ContainerPage>
  );
};

export default Home;
