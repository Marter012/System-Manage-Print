import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const SectionTitle = styled.h3`
  margin: 0;

  color: #653007;
  font-size: 1rem;
  font-weight: 700;
`;

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

  small {
    color: #8b7b6e;
    font-size: 0.76rem;
    line-height: 1.4;
  }

  input,
  select,
  textarea {
    width: 100%;
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

  input,
  select {
    min-height: 44px;
  }

  textarea {
    min-height: 85px;
    resize: vertical;
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

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;
`;

export const PromotionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  box-sizing: border-box;

  padding: 18px;

  border: 1px solid #e1d4c7;
  border-radius: 10px;

  background-color: #faf8f6;
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  padding-bottom: 12px;

  border-bottom: 1px solid #e8ddd3;

  > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  strong {
    color: #653007;

    font-size: 0.95rem;
    font-weight: 700;
  }

  span {
    color: #8b7b6e;

    font-size: 0.76rem;
  }

  @media (max-width: 480px) {
    align-items: flex-start;

    > div {
      min-width: 0;
    }

    span {
      line-height: 1.3;
    }
  }
`;

export const RemoveItemButton = styled.button`
  flex-shrink: 0;

  padding: 6px 10px;

  border: 1px solid #e0b8b4;
  border-radius: 7px;

  background-color: #fff5f4;
  color: #b42318;

  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #fce9e7;
    border-color: #d99a94;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const ProductToolbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 220px;

  gap: 10px;

  width: 100%;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchInput = styled.input`
  min-height: 42px;

  padding: 9px 12px;

  border: 1px solid #d8c4ad;
  border-radius: 8px;

  background-color: #ffffff;
  color: #3f2a1d;

  font-family: inherit;
  font-size: 0.86rem;

  outline: none;

  &::placeholder {
    color: #a59a91;
  }

  &:focus {
    border-color: #653007;
    box-shadow: 0 0 0 3px rgba(101, 48, 7, 0.1);
  }
`;

export const CategorySelect = styled.select`
  min-height: 42px;

  padding: 9px 12px;

  border: 1px solid #d8c4ad;
  border-radius: 8px;

  background-color: #ffffff;
  color: #3f2a1d;

  font-family: inherit;
  font-size: 0.86rem;

  outline: none;

  cursor: pointer;

  &:focus {
    border-color: #653007;
    box-shadow: 0 0 0 3px rgba(101, 48, 7, 0.1);
  }
`;

export const ProductSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  width: 100%;

  max-height: 260px;

  overflow-y: auto;

  padding: 10px;

  border: 1px solid #e1d4c7;
  border-radius: 8px;

  background-color: #ffffff;

  scrollbar-width: thin;
`;

export const ProductOption = styled.button<{
  $selected: boolean;
}>`
  display: flex;
  align-items: center;

  gap: 10px;

  width: 100%;
  min-height: 45px;

  padding: 8px 11px;

  border: 1px solid
    ${({ $selected }) =>
      $selected ? "#c29e70" : "transparent"};

  border-radius: 8px;

  background-color: ${({ $selected }) =>
    $selected ? "#faf1e8" : "#ffffff"};

  color: #3f2a1d;

  font-family: inherit;

  font-size: 0.86rem;

  font-weight: ${({ $selected }) =>
    $selected ? "700" : "500"};

  text-align: left;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #faf5ef;
    border-color: #d8c4ad;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const ProductCheck = styled.span<{
  $selected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 22px;
  height: 22px;

  border: 1px solid
    ${({ $selected }) =>
      $selected ? "#653007" : "#cfc2b5"};

  border-radius: 6px;

  background-color: ${({ $selected }) =>
    $selected ? "#653007" : "#ffffff"};

  color: #ffffff;

  font-size: 0.75rem;
  font-weight: 700;
`;

export const SelectedProductsInfo = styled.div`
  padding: 8px 11px;

  border-radius: 7px;

  background-color: #f8f1eb;

  color: #795548;

  font-size: 0.78rem;
  font-weight: 600;
`;

export const EmptyProductsMessage = styled.div`
  padding: 12px 14px;

  border: 1px solid #ead8b8;
  border-radius: 8px;

  background-color: #fffaf0;

  color: #795548;

  font-size: 0.82rem;
  line-height: 1.4;
`;

export const AddItemButton = styled.button`
  width: 100%;
  min-height: 42px;

  padding: 10px 16px;

  border: 1px dashed #c29e70;
  border-radius: 8px;

  background-color: #fffaf5;
  color: #653007;

  font-family: inherit;
  font-size: 0.86rem;
  font-weight: 700;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #f8eee4;
    border-color: #653007;
  }

  &:active {
    transform: scale(0.98);
  }
`;

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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;