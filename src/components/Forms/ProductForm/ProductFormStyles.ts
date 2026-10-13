import styled from "styled-components";

// =========================================================
// CONTENEDOR
// =========================================================

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
`;

// =========================================================
// GRUPO DEL FORMULARIO
// =========================================================

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 7px;

  width: 100%;

  label {
    color: #653007;

    font-size: 0.88rem;

    font-weight: 700;

    line-height: 1.2;
  }

  input,
  select {
    width: 100%;

    min-height: 44px;

    box-sizing: border-box;

    padding: 10px 13px;

    border: 1px solid #d8c4ad;

    border-radius: 8px;

    background-color: #ffffff;

    color: #3f2a1d;

    font-family: inherit;

    font-size: 0.92rem;

    outline: none;

    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;

    &::placeholder {
      color: #a59a91;
    }

    &:hover {
      border-color: #c29e70;
    }

    &:focus {
      border-color: #653007;

      box-shadow:
        0 0 0 3px
        rgba(101, 48, 7, 0.1);
    }

    &:disabled {
      background-color: #f3f3f3;

      color: #777;

      cursor: not-allowed;
    }
  }

  input[type="number"] {
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      margin: 0;

      appearance: none;
    }
  }
  .category-input {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(125px, 0.75fr);
    gap: 8px;
  }

  .garnish-toggle {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 68px;
    padding: 12px 42px 12px 14px;
    border: 1px solid #e4d3bf;
    border-radius: 12px;
    background: #fffaf4;
    cursor: pointer;
    transition: border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;

    &:hover {
      border-color: #c29e70;
      background: #fff7ec;
    }

    &:has(.garnish-checkbox:checked) {
      border-color: #a97745;
      background: #f8eee1;
      box-shadow: 0 0 0 3px rgba(194, 158, 112, 0.12);
    }

    .garnish-checkbox {
      width: 20px;
      height: 20px;
      min-height: 20px;
      flex: 0 0 20px;
      margin: 0;
      padding: 0;
      border: 0;
      accent-color: #653007;
      cursor: pointer;
      box-shadow: none;
    }

    .garnish-checkbox:hover,
    .garnish-checkbox:focus { box-shadow: none; }

    .garnish-toggle-copy {
      display: flex;
      flex-direction: column;
      gap: 3px;
      min-width: 0;

      strong { color: #653007; font-size: 0.86rem; line-height: 1.25; }
      small { color: #806d5e; font-size: 0.74rem; line-height: 1.35; font-weight: 400; }
    }

  }

  .garnish-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 14px;
    border: 1px solid #eadfd4;
    border-radius: 10px;
    background: #fff;
    animation: garnishReveal 160ms ease-out;

    label { color: #653007; font-size: 0.82rem; font-weight: 750; }
    small { color: #8d7d70; font-size: 0.72rem; }
  }

  @keyframes garnishReveal {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 520px) {
    .category-input { grid-template-columns: minmax(0, 1fr); }
  }
`;

// =========================================================
// ERROR
// =========================================================

export const ErrorText = styled.span`
  display: flex;
  align-items: center;

  gap: 5px;

  margin-top: 1px;

  color: #b42318;

  font-size: 0.78rem;

  font-weight: 500;

  line-height: 1.3;
`;

// =========================================================
// ACCIONES
// =========================================================

export const FormActions = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;

  gap: 10px;

  margin-top: 5px;

  padding-top: 16px;

  border-top: 1px solid #eadfd4;

  @media (max-width: 480px) {
    flex-direction: column-reverse;

    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;

// =========================================================
// BOTÓN CANCELAR
// =========================================================

export const CancelButton = styled.button`
  min-height: 42px;

  padding: 10px 20px;

  border: 1px solid #ddd5ce;

  border-radius: 8px;

  background-color: #f5f3f1;

  color: #5f5751;

  font-family: inherit;

  font-size: 0.86rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #ebe7e3;

    border-color: #cfc6be;

    color: #403a35;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;

    transform: none;
  }
`;

// =========================================================
// BOTÓN GUARDAR
// =========================================================

export const SubmitButton = styled.button`
  min-height: 42px;

  padding: 10px 20px;

  border: 1px solid #653007;

  border-radius: 8px;

  background-color: #653007;

  color: #ffffff;

  font-family: inherit;

  font-size: 0.86rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #7b3d0b;

    border-color: #7b3d0b;

    box-shadow:
      0 3px 8px
      rgba(101, 48, 7, 0.18);
  }

  &:active {
    transform: scale(0.98);

    box-shadow: none;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;

    box-shadow: none;

    transform: none;
  }
`;
