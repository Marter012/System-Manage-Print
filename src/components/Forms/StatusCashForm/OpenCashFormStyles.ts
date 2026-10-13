import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;

  flex-direction: column;

  gap: 18px;

  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;

  flex-direction: column;

  gap: 7px;

  width: 100%;
`;

export const Label = styled.label`
  font-weight: 600;

  color: #653007;
`;

export const Input = styled.input`
  width: 100%;

  padding: 11px 13px;

  box-sizing: border-box;

  border: 1px solid #c29e70;

  border-radius: 8px;

  background-color: white;
  font-size: 1rem;

  outline: none;

  transition: 0.2s;

  &:focus {
    border-color: #653007;

    box-shadow: 0 0 0 2px rgba(101, 48, 7, 0.1);
  }

  &:disabled {
    background-color: #f2f2f2;

    cursor: not-allowed;
  }
`;
export const Select = styled.select`
  width: 100%;

  padding: 11px 13px;

  box-sizing: border-box;

  border: 1px solid #c29e70;

  border-radius: 8px;

  background-color: red;

  font-size: 1rem;

  outline: none;

  transition: 0.2s;

  &:focus {
    border-color: #653007;

    box-shadow: 0 0 0 2px rgba(101, 48, 7, 0.1);
  }

  &:disabled {
    background-color: #f2f2f2;

    cursor: not-allowed;
  }
`;
export const ErrorText = styled.span`
  color: #b42318;

  font-size: 0.85rem;
`;

export const FormActions = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 10px;

  margin-top: 10px;
`;

export const CancelButton = styled.button`
  padding: 11px 20px;

  border: none;

  border-radius: 8px;

  background-color: #ddd;

  color: #333;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: #ccc;
  }
`;

export const SubmitButton = styled.button`
  padding: 11px 20px;

  border: none;

  border-radius: 8px;

  background-color: #653007;

  color: white;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: #7b3d0b;
  }

  &:disabled {
    opacity: 0.6;

    cursor: not-allowed;
  }
`;
