import styled from "styled-components";

export const NavigationContainer = styled.nav`
  position: relative;

  height: 70px;

  display: flex;
  align-items: center;

  flex-shrink: 0;

  /* =========================
     NAVIGATION LINKS
  ========================= */

  .navigation-links {
    height: 100%;

    display: flex;
    align-items: center;

    gap: 5px;
  }

  /* =========================
     LINKS
  ========================= */

  a {
    position: relative;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    padding: 0 20px;

    box-sizing: border-box;

    color: #c29e70;

    text-decoration: none;

    font-size: 0.95rem;
    font-weight: 500;

    white-space: nowrap;

    flex-shrink: 0;

    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  a svg {
    font-size: 17px;

    flex-shrink: 0;
  }

  /* =========================
     HOVER
  ========================= */

  a:hover {
    color: #f4e9d8;

    background-color: rgba(194, 158, 112, 0.12);
  }

  /* =========================
     ACTIVE
  ========================= */

  a.active {
    color: #f4e9d8;

    background-color: rgba(194, 158, 112, 0.15);
  }

  a.active::after {
    content: "";

    position: absolute;

    bottom: 0;
    left: 20%;

    width: 60%;
    height: 3px;

    border-radius: 5px 5px 0 0;

    background-color: #c29e70;
  }

  /* =========================
     HAMBURGER
  ========================= */

  .menu-toggle {
    display: none;

    width: 44px;
    height: 44px;

    align-items: center;
    justify-content: center;

    padding: 0;

    border: none;
    border-radius: 10px;

    background-color: transparent;

    color: #c29e70;

    font-size: 22px;

    cursor: pointer;

    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  .menu-toggle:hover {
    color: #f4e9d8;

    background-color: rgba(194, 158, 112, 0.12);
  }

  /* =========================
     TABLET
  ========================= */

  @media (max-width: 1100px) {
    .navigation-links {
      gap: 2px;
    }

    a {
      padding: 0 14px;

      gap: 6px;

      font-size: 0.9rem;
    }
  }

  /* =========================
     MOBILE
  ========================= */

  @media (max-width: 1400px) {
    height: 50px;

    .menu-toggle {
      display: flex;
    }

    .navigation-links {
      position: absolute;

      top: calc(100% + 8px);
      right: 0;

      z-index: 1000;

      width: 230px;
      height: auto;

      display: flex;
      flex-direction: column;
      align-items: stretch;

      gap: 3px;

      padding: 8px;

      border: 1px solid rgba(194, 158, 112, 0.15);

      border-radius: 12px;

      background-color: #653007;

      box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.3);

      opacity: 0;

      visibility: hidden;

      transform: translateY(-8px);

      pointer-events: none;

      transition:
        opacity 0.2s ease,
        transform 0.2s ease,
        visibility 0.2s ease;
    }

    .navigation-links.open {
      opacity: 1;

      visibility: visible;

      transform: translateY(0);

      pointer-events: auto;
    }

    a {
      width: 100%;
      height: 48px;

      justify-content: flex-start;

      gap: 12px;

      padding: 0 14px;

      border-radius: 8px;

      font-size: 0.9rem;
    }

    a span {
      display: inline;
    }

    a svg {
      width: 20px;

      font-size: 18px;
    }

    a.active::after {
      display: none;
    }

    a.active {
      background-color: rgba(194, 158, 112, 0.15);
    }
  }

  /* =========================
     MOBILE CHICO
  ========================= */

  @media (max-width: 400px) {
    .navigation-links {
      width: 215px;
    }

    a {
      height: 46px;

      padding: 0 12px;
    }
  }
`;

export const PrintButton = styled.button`
  position: relative;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 0 18px;

  box-sizing: border-box;

  flex-shrink: 0;

  border: none;

  background-color: transparent;

  color: #c29e70;

  font-size: 18px;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    color: #f4e9d8;

    background-color: rgba(194, 158, 112, 0.12);
  }

  span {
    font-size: 0.95rem;
    font-weight: 500;
  }

  @media (max-width: 1100px) {
    padding: 0 14px;
  }

  @media (max-width: 700px) {
    width: 100%;

    height: 48px;

    justify-content: flex-start;

    gap: 12px;

    padding: 0 14px;

    border-radius: 8px;

    font-size: 18px;

    span {
      display: inline;
    }
  }

  @media (max-width: 400px) {
    height: 46px;

    padding: 0 12px;
  }
`;

export const PrintIndicator = styled.span<{
  $online: boolean;
}>`
  position: absolute;

  top: 16px;
  right: 13px;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background-color: ${({ $online }) =>
    $online ? "#35a853" : "#d9534f"};

  box-shadow:
    0 0 0 2px rgba(255, 255, 255, 0.15);

  pointer-events: none;

  @media (max-width: 700px) {
    top: 13px;
    right: 12px;
  }

  @media (max-width: 400px) {
    top: 12px;
    right: 10px;

    width: 6px;
    height: 6px;
  }
`;