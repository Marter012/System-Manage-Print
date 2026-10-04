import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  label {
    font-size: 13px;
    font-weight: 700;
    color: #3e2a1e;
  }

  input,
  select {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #e3d5c9;
    border-radius: 10px;
    padding: 11px 13px;
    background: #fffaf6;
    color: #3e2a1e;
    font-size: 14px;
    outline: none;
    transition: 0.2s ease;

    &:focus {
      border-color: #653007;
      box-shadow: 0 0 0 3px rgba(101, 48, 7, 0.08);
    }
  }
`;

export const ErrorText = styled.span`
  color: #b42318;
  font-size: 12px;
  font-weight: 600;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 8px;
`;

export const CancelButton = styled.button`
  border: 1px solid #dfd1c5;
  border-radius: 10px;
  padding: 11px 18px;
  background: #fff;
  color: #653007;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 11px 18px;
  background: #653007;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #512505;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;