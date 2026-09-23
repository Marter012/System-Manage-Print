import styled from "styled-components";

export const StockFormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 20px;

  .typeMovement{
    display: flex;
  }
`;

export const StockInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;

  padding: 14px 16px;

  border-radius: 10px;

  background-color: rgba(115, 77, 44, 0.08);

  h3 {
    margin: 0;

    color: #734d2c;

    font-size: 1.1rem;
  }

  p {
    margin: 0;

    font-size: 0.9rem;

    opacity: 0.7;
  }

  strong {
    color: #734d2c;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 6px;

  label {
    font-size: 0.9rem;

    font-weight: 600;

    color: #734d2c;
  }

  input,
  select,
  textarea {
    width: 100%;

    padding: 10px 12px;

    box-sizing: border-box;

    border: 1px solid rgba(115, 77, 44, 0.25);

    border-radius: 8px;

    background-color: white;

    color: #333;

    font-family: inherit;

    font-size: 0.9rem;

    outline: none;

    transition:
      border-color 0.2s,
      box-shadow 0.2s;

    &:focus {
      border-color: #734d2c;

      box-shadow: 0 0 0 2px rgba(115, 77, 44, 0.1);
    }
  }

  textarea {
    min-height: 80px;

    resize: vertical;
  }

  .stock-type-buttons {
    display: flex;
    width: 100%;
    justify-content: space-around;
    button {
      border: none;
      padding: 10px 35px ;
      border-radius: 10px;
      background-color: rgb(0, 0, 0, 0.5);
      cursor: pointer;
    }
    .inflow {
      background-color: green;
    }
    .outflow {
      background-color: red;
    }
  }

`;

export const ErrorText = styled.div`
  color: #b84a4a;

  font-size: 0.8rem;
`;

export const FormActions = styled.div`
  display: flex;

  gap: 10px;

  margin-top: 4px;
`;

export const CancelButton = styled.button`
  flex: 1;

  padding: 11px 14px;

  border: 1px solid rgba(115, 77, 44, 0.35);

  border-radius: 8px;

  background-color: transparent;

  color: #734d2c;

  font-size: 0.9rem;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: rgba(115, 77, 44, 0.08);
  }
`;

export const SubmitButton = styled.button`
  flex: 1;

  padding: 11px 14px;

  border: none;

  border-radius: 8px;

  background-color: #734d2c;

  color: white;

  font-size: 0.9rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s,
    transform 0.2s;

  &:hover:not(:disabled) {
    background-color: #c29e70;

    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;
