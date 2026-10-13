import styled from "styled-components";

type CashStatusType = "open" | "closed" | "not-open";

interface StatusProps {
  $status: CashStatusType;
}

interface SelectedProps {
  $selected: boolean;
}

export const CashStatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: fit-content;
  min-width: 0;

  position: relative;
  z-index: 20;

  font-family: inherit;
`;

export const DateButton = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  height: 48px;
  min-width: 82px;

  padding: 0 11px;

  border: 1px solid #e4e1dc;
  border-radius: 12px;

  background: #c29e70;

  color: #30302e;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #cfcac2;
    background: #faf9f7;
  }

  &:active {
    transform: scale(0.98);
  }

  .calendar-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 27px;
    height: 27px;

    border-radius: 8px;

    background: #f2f0ec;

    color: #55514b;

    font-size: 13px;
  }

  .cash-date-input {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    opacity: 0;

    cursor: pointer;
  }

  @media (max-width: 700px) {
    min-width: 78px;
    height: 46px;

    padding: 0 9px;

    gap: 7px;
  }
`;

export const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 28px;

  line-height: 1;

  .day-number {
    font-size: 17px;
    font-weight: 800;
  }

  .month {
    margin-top: 3px;

    font-size: 9px;
    font-weight: 700;

    letter-spacing: 0.8px;
  }
`;

export const ShiftSelector = styled.div`
  position: relative;

  min-width: 155px;

  @media (max-width: 700px) {
    min-width: 0;
    width: 100%;
    max-width: 230px;
  }
`;

export const ShiftSelectorButton = styled.button<StatusProps>`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 48px;

  padding: 6px 10px;

  border: 1px solid #e4e1dc;
  border-radius: 12px;
  background: ${({ $status }) => {
    switch ($status) {
      case "open":
        return "#8bd592"; // verde
      case "closed":
        return "#d07f7f"; // rojo
      default:
        return "#ffffff"; // blanco
    }
  }};

  color: #30302e;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #cfcac2;
    background: #faf9f7;
  }

  &:active {
    transform: scale(0.99);
  }

  .shift-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    flex-shrink: 0;

    border-radius: 9px;

    background: #f2f0ec;

    color: #55514b;

    font-size: 13px;

    @media (max-width: 700px) {
      display: none;
    }
  }

  .shift-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex: 1;

    min-width: 0;

    line-height: 1.1;

    text-align: center;

    strong {
      font-size: 12px;
      font-weight: 750;
    }

    small {
      margin-top: 3px;

      white-space: nowrap;
    }
  }

  .arrow {
    flex-shrink: 0;

    margin-left: 7px;

    font-size: 10px;

    transition: transform 0.2s ease;

    &.open {
      transform: rotate(180deg);
    }
  }

  @media (max-width: 700px) {
    min-height: 46px;
  }
`;

export const StatusDot = styled.span<StatusProps>`
  width: 7px;
  height: 7px;

  flex-shrink: 0;

  margin-left: 5px;

  border-radius: 50%;

  background: ${({ $status }) => {
    switch ($status) {
      case "open":
        return "#58a66a";

      case "closed":
        return "#d46a6a";

      default:
        return "#b7b3ad";
    }
  }};
`;

export const ShiftDropdown = styled.div`
  position: absolute;

  top: calc(100% + 7px);
  right: 0;

  width: 235px;

  padding: 7px;

  border: 1px solid #e4e1dc;
  border-radius: 14px;

  background: #c29e70;

  box-shadow:
    0 12px 30px rgba(45, 42, 38, 0.12),
    0 2px 7px rgba(45, 42, 38, 0.06);

  z-index: 100;
`;

export const ShiftSelectorContent = styled.div`
  display: flex;
  align-items: center;

  height: 30px;

  padding: 0 10px;

  font-size: 9px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.7px;
`;

export const ShiftOption = styled.button<SelectedProps>`
  display: flex;
  align-items: center;

  width: 100%;

  min-height: 50px;

  padding: 7px 9px;

  border: none;
  border-radius: 10px;

  background: ${({ $selected }) => ($selected ? "#f6f4f1" : "transparent")};

  color: #30302e;

  cursor: pointer;

  text-align: left;

  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: #f6f4f1;
  }

  &:active {
    transform: scale(0.99);
  }

  .option-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    flex-shrink: 0;

    border-radius: 8px;

    background: #efede9;

    font-size: 12px;
  }

  .check {
    margin-left: 8px;

    font-size: 11px;
  }
`;

export const ShiftOptionInfo = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  min-width: 0;

  margin-left: 9px;

  line-height: 1.1;

  strong {
    font-size: 11px;
    font-weight: 750;
  }

  small {
    margin-top: 3px;

    font-size: 9px;
  }
`;

export const OpenCashLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  min-height: 37px;

  margin-top: 5px;

  border-top: 1px solid #eeeae5;

  padding-top: 7px;

  color: black;

  font-size: 10px;
  font-weight: 700;

  text-decoration: none;

  transition: color 0.2s ease;

  &:hover {
    color: #30302e;
  }
`;
