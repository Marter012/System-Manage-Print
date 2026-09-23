import styled from "styled-components";

export const Form =
  styled.form`
    display: flex;

    flex-direction: column;

    gap: 18px;
  `;

export const FormGroup =
  styled.div`
    display: flex;

    flex-direction: column;

    gap: 7px;
  `;

export const Label =
  styled.label`
    font-size: 0.9rem;

    font-weight: 600;

    color: #653007;
  `;

export const Input =
  styled.input`
    width: 100%;

    padding: 11px;

    box-sizing: border-box;

    border: 1px solid
      rgba(101, 48, 7, 0.25);

    border-radius: 7px;

    background: white;

    color: #333;

    outline: none;

    &:focus {
      border-color: #653007;
    }
  `;

export const Select =
  styled.select`
    width: 100%;

    padding: 11px;

    box-sizing: border-box;

    border: 1px solid
      rgba(101, 48, 7, 0.25);

    border-radius: 7px;

    background: white;

    color: #333;

    outline: none;

    &:focus {
      border-color: #653007;
    }
  `;

export const TextArea =
  styled.textarea`
    width: 100%;

    padding: 11px;

    box-sizing: border-box;

    resize: vertical;

    border: 1px solid
      rgba(101, 48, 7, 0.25);

    border-radius: 7px;

    background: white;

    color: #333;

    outline: none;

    font-family: inherit;

    &:focus {
      border-color: #653007;
    }
  `;

export const Actions =
  styled.div`
    display: flex;

    justify-content: flex-end;

    gap: 10px;

    margin-top: 5px;
  `;

export const CancelButton =
  styled.button`
    padding: 10px 18px;

    border: none;

    border-radius: 7px;

    background: #ddd;

    color: #333;

    font-weight: 600;

    cursor: pointer;
  `;

export const SubmitButton =
  styled.button`
    padding: 10px 18px;

    border: none;

    border-radius: 7px;

    background: #653007;

    color: white;

    font-weight: 600;

    cursor: pointer;

    &:disabled {
      opacity: 0.6;

      cursor: not-allowed;
    }
  `;