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

import { ContainerPage } from "../PageStyles.ts";

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
} from "./HomeStyles.ts";
import ManageUser from "../../ManageUsers/ManageUser.tsx";

const Home = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  const [showUserManagement, setShowUserManagement] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getMe();

        setUser(data);
      } catch (error) {
        console.error("Error obteniendo información del usuario:", error);
      }
    };

    loadUser();
  }, []);

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  const getInitial = () => {
    if (!user?.username) {
      return "U";
    }

    return user.username.charAt(0).toUpperCase();
  };

  const isAdmin = user?.role === "admin";

  return (
    <ContainerPage className="home-page">
      {/* =========================
          HEADER
      ========================= */}

      <HomeHeader>
        <HeaderContent>
          <Greeting>
            <span>Panel principal</span>

            <h1>Hola, {user?.username || "usuario"} 👋</h1>

            <p>Todo lo que necesitás para gestionar Boutique de Sabores.</p>
          </Greeting>

          <UserBadge>
            <div className="user-info">
              <UserAvatar>{getInitial()}</UserAvatar>

              <UserDetails>
                <UserName>{user?.username || "Usuario"}</UserName>

                <UserEmail>{user?.email || "Cargando usuario..."}</UserEmail>
              </UserDetails>
            </div>

            <div className="user-info">
              {isAdmin && (
                <LogoutButton
                  type="button"
                  onClick={() => setShowUserManagement(true)}
                  title="Gestión de usuarios"
                >
                  <FaUsers />
                  <span>Usuarios</span>
                </LogoutButton>
              )}

              <LogoutButton
                type="button"
                onClick={handleLogout}
                title="Cerrar sesión"
              >
                <FaSignOutAlt />
                <span>Cerrar sesión</span>
              </LogoutButton>
            </div>
          </UserBadge>
        </HeaderContent>
      </HomeHeader>

      {/* =========================
          INTRO
      ========================= */}

      <Intro>
        <IntroTitle>¿Qué querés hacer?</IntroTitle>

        <IntroText>
          Seguí el flujo habitual del sistema para registrar y controlar tus
          ventas.
        </IntroText>
      </Intro>

      {/* =========================
          ACCIONES PRINCIPALES
      ========================= */}

      <QuickActions>
        <ActionItem>
          <ActionIcon>
            <FaCashRegister />
          </ActionIcon>

          <ActionContent>
            <ActionNumber>01</ActionNumber>

            <ActionTitle>Abrir caja</ActionTitle>

            <ActionDescription>
              Iniciá el turno y registrá el dinero disponible.
            </ActionDescription>
          </ActionContent>
        </ActionItem>

        <ActionItem>
          <ActionIcon>
            <FaClipboardList />
          </ActionIcon>

          <ActionContent>
            <ActionNumber>02</ActionNumber>

            <ActionTitle>Nueva comanda</ActionTitle>

            <ActionDescription>
              Cargá los productos o promociones solicitados por el cliente.
            </ActionDescription>
          </ActionContent>
        </ActionItem>

        <ActionItem>
          <ActionIcon>
            <FaClipboardList />
          </ActionIcon>

          <ActionContent>
            <ActionNumber>03</ActionNumber>

            <ActionTitle>Registrar venta</ActionTitle>

            <ActionDescription>
              Completá los datos y seleccioná el método de pago.
            </ActionDescription>
          </ActionContent>
        </ActionItem>

        <ActionItem>
          <ActionIcon>
            <FaBoxOpen />
          </ActionIcon>

          <ActionContent>
            <ActionNumber>04</ActionNumber>

            <ActionTitle>Revisar ventas</ActionTitle>

            <ActionDescription>
              Consultá comandas y movimientos registrados.
            </ActionDescription>
          </ActionContent>
        </ActionItem>
      </QuickActions>

      {/* =========================
          WORKFLOW
      ========================= */}

      <Workflow>
        <WorkflowHeader>
          <div>
            <WorkflowTitle>Flujo de trabajo</WorkflowTitle>

            <WorkflowDescription>
              El proceso habitual para una venta.
            </WorkflowDescription>
          </div>
        </WorkflowHeader>

        <WorkflowSteps>
          <WorkflowStep>
            <WorkflowIcon>
              <FaCashRegister />
            </WorkflowIcon>

            <span>Abrir caja</span>
          </WorkflowStep>

          <WorkflowArrow>
            <FaArrowRight />
          </WorkflowArrow>

          <WorkflowStep>
            <WorkflowIcon>
              <FaClipboardList />
            </WorkflowIcon>

            <span>Comanda</span>
          </WorkflowStep>

          <WorkflowArrow>
            <FaArrowRight />
          </WorkflowArrow>

          <WorkflowStep>
            <WorkflowIcon>
              <FaBoxOpen />
            </WorkflowIcon>

            <span>Venta</span>
          </WorkflowStep>

          <WorkflowArrow>
            <FaArrowRight />
          </WorkflowArrow>

          <WorkflowStep>
            <WorkflowIcon>
              <FaCashRegister />
            </WorkflowIcon>

            <span>Cerrar caja</span>
          </WorkflowStep>
        </WorkflowSteps>
      </Workflow>

      {/* =========================
          TIP
      ========================= */}

      <Tip>
        <span>💡</span>

        <div>
          <strong>Recordatorio</strong>

          <p>
            Antes de registrar una venta, asegurate de tener la caja abierta.
          </p>
        </div>
      </Tip>

      {/* =========================
          GESTIÓN DE USUARIOS
      ========================= */}

      {isAdmin && (
        <ManageUser
          isOpen={showUserManagement}
          onClose={() => setShowUserManagement(false)}
        />
      )}
    </ContainerPage>
  );
};

export default Home;
