import {
  FaCashRegister,
  FaClipboardList,
  FaBoxOpen,
  FaArrowRight,
} from "react-icons/fa";

import {
  Welcome,
  Tutorial,
  TutorialCard,
  StepNumber,
  Workflow,
  WorkflowStep,
  WorkflowArrow,
  Tip,
} from "./HomeStyles.ts";
import { ContainerPage } from "../PageStyles.ts";

const Home = () => {
  return (
    <ContainerPage>
      <Welcome>
        <h1>Bienvenido a Boutique de Sabores 👋</h1>

        <p>
          Desde acá podés gestionar tus ventas,
          comandas, productos y caja de forma simple.
        </p>
      </Welcome>

      <Tutorial>
        <h2>¿Cómo empezar?</h2>

        <p className="description">
          Seguí estos pasos para registrar una venta.
        </p>

        <div className="cards">
          <TutorialCard>
            <StepNumber>1</StepNumber>

            <FaCashRegister />

            <h3>Abrí la caja</h3>

            <p>
              Iniciá el día abriendo la caja y
              registrando el dinero disponible.
            </p>
          </TutorialCard>

          <TutorialCard>
            <StepNumber>2</StepNumber>

            <FaClipboardList />

            <h3>Creá una comanda</h3>

            <p>
              Agregá los productos o promociones
              que solicita el cliente.
            </p>
          </TutorialCard>

          <TutorialCard>
            <StepNumber>3</StepNumber>

            <FaClipboardList />

            <h3>Completá la venta</h3>

            <p>
              Indicá los datos necesarios y
              seleccioná el método de pago.
            </p>
          </TutorialCard>

          <TutorialCard>
            <StepNumber>4</StepNumber>

            <FaBoxOpen />

            <h3>Revisá tus ventas</h3>

            <p>
              Consultá las comandas y los
              movimientos de caja cuando quieras.
            </p>
          </TutorialCard>
        </div>
      </Tutorial>

      <Workflow>
        <h2>Flujo de trabajo</h2>

        <div className="flow">
          <WorkflowStep>
            <FaCashRegister />
            <span>Abrir caja</span>
          </WorkflowStep>

          <WorkflowArrow>
            <FaArrowRight />
          </WorkflowArrow>

          <WorkflowStep>
            <FaClipboardList />
            <span>Nueva comanda</span>
          </WorkflowStep>

          <WorkflowArrow>
            <FaArrowRight />
          </WorkflowArrow>

          <WorkflowStep>
            <FaBoxOpen />
            <span>Registrar venta</span>
          </WorkflowStep>

          <WorkflowArrow>
            <FaArrowRight />
          </WorkflowArrow>

          <WorkflowStep>
            <FaCashRegister />
            <span>Cerrar caja</span>
          </WorkflowStep>
        </div>
      </Workflow>

      <Tip>
        <strong>💡 Consejo</strong>

        <span>
          Antes de registrar una venta, asegurate de
          tener la caja abierta.
        </span>
      </Tip>
    </ContainerPage>
  );
};

export default Home;