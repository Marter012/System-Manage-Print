import styled from "styled-components";

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  flex-shrink: 0;

  /* =========================
     LOGO
  ========================= */

  .brand-logo {
    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 50%;

    background-color: #c29e70;

    color: #653007;

    font-size: 1rem;
    font-weight: 800;

    letter-spacing: 1px;
  }

  /* =========================
     INFORMATION
  ========================= */

  .brand-info {
    display: flex;
    flex-direction: column;

    gap: 2px;

    min-width: 0;
  }

  .brand-info h2 {
    margin: 0;

    color: #f4e9d8;

    font-size: 1.2rem;
    font-weight: 600;

    white-space: nowrap;
  }

  .brand-info span {
    color: #c29e70;

    font-size: 0.7rem;

    white-space: nowrap;
  }

  /* =========================
     TABLET / PANTALLAS MEDIANAS
  ========================= */

  @media (max-width: 1000px) {
    gap: 0;

    .brand-info {
      display: none;
    }

    .brand-logo {
      width: 42px;
      height: 42px;

      font-size: 0.95rem;
    }
  }

  /* =========================
     CELULAR
  ========================= */

  @media (max-width: 600px) {
    .brand-logo {
      width: 38px;
      height: 38px;

      font-size: 0.85rem;
    }
  }

  /* =========================
     CELULAR CHICO
  ========================= */

  @media (max-width: 400px) {
    .brand-logo {
      width: 35px;
      height: 35px;

      font-size: 0.8rem;
    }
  }
`;