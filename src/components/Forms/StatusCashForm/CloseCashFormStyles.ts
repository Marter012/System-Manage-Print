// components/Forms/CloseCashFormStyles.ts

import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  padding: 12px 14px;

  border: 1px solid #ccc;
  border-radius: 8px;

  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #1d3e32;
  }

  &:disabled {
    background: #f3f3f3;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: #c62828;
  font-size: 13px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`;

export const CancelButton = styled.button`
  padding: 10px 18px;

  border: 1px solid #ccc;
  border-radius: 8px;

  background: white;

  cursor: pointer;

  font-size: 14px;

  &:hover {
    background: #f5f5f5;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 18px;

  border: none;
  border-radius: 8px;

  background: #1d3e32;
  color: white;

  cursor: pointer;

  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;