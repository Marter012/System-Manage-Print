import styled from "styled-components";

// =========================================================
// CONTENEDOR
// =========================================================

export const FormContainer = styled.div`
  display: flex;

  flex-direction: column;

  gap: 20px;

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

      box-shadow: 0 0 0 3px rgba(101, 48, 7, 0.1);
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
`;

// =========================================================
// FILA DE CAMPOS
// =========================================================

export const FormRow = styled.div`
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 14px;

  width: 100%;
`;

// =========================================================
// LABEL
// =========================================================

export const Label = styled.label`
  color: #653007;

  font-size: 0.88rem;

  font-weight: 700;

  line-height: 1.2;
`;

// =========================================================
// INPUT
// =========================================================

export const Input = styled.input`
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

    box-shadow: 0 0 0 3px rgba(101, 48, 7, 0.1);
  }

  &:disabled {
    background-color: #f3f3f3;

    color: #777;

    cursor: not-allowed;
  }
`;

// =========================================================
// SELECT
// =========================================================

export const Select = styled.select`
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

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: #c29e70;
  }

  &:focus {
    border-color: #653007;

    box-shadow: 0 0 0 3px rgba(101, 48, 7, 0.1);
  }

  &:disabled {
    background-color: #f3f3f3;

    color: #777;

    cursor: not-allowed;
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
// PRODUCTOS
// =========================================================

export const ProductsContainer = styled.div`
  display: flex;

  flex-direction: column;

  gap: 12px;

  width: 100%;
`;

// =========================================================
// FILA DE PRODUCTO
// =========================================================

export const ProductRow = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    110px
    auto;

  align-items: end;

  gap: 12px;

  width: 100%;

  padding: 12px;

  box-sizing: border-box;

  border: 1px solid #e1d5c9;

  border-radius: 8px;

  background-color: #faf8f6;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    border-color: #d1bda7;

    background-color: #fdfbf9;
  }
`;

// =========================================================
// CANTIDAD
// =========================================================

export const QuantityInput = styled.input`
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

  text-align: center;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: #c29e70;
  }

  &:focus {
    border-color: #653007;

    box-shadow: 0 0 0 3px rgba(101, 48, 7, 0.1);
  }

  &:disabled {
    background-color: #f3f3f3;

    color: #777;

    cursor: not-allowed;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;

    appearance: none;
  }
`;

// =========================================================
// ELIMINAR PRODUCTO
// =========================================================

export const RemoveButton = styled.button`
  min-height: 44px;

  padding: 10px 14px;

  border: 1px solid #e1b5b0;

  border-radius: 8px;

  background-color: #fff8f7;

  color: #b42318;

  font-family: inherit;

  font-size: 0.82rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #b42318;

    border-color: #b42318;

    color: #ffffff;
  }

  &:active {
    transform: scale(0.98);
  }
`;

// =========================================================
// AGREGAR PRODUCTO
// =========================================================

export const AddButton = styled.button`
  align-self: flex-start;

  min-height: 40px;

  padding: 9px 15px;

  border: 1px solid #c29e70;

  border-radius: 8px;

  background-color: #f5ede4;

  color: #653007;

  font-family: inherit;

  font-size: 0.84rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #eadbc9;

    border-color: #b18d61;

    color: #4f2605;
  }

  &:active {
    transform: scale(0.98);
  }
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

    box-shadow: 0 3px 8px rgba(101, 48, 7, 0.18);
  }

  &:active {
    transform: scale(0.98);

    box-shadow: none;
  }

  &.deactivate {
    background-color: #b42318;
    
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;

    box-shadow: none;

    transform: none;
  }
`;
