import styled from "styled-components";

export const Overlay = styled.div<{
  $above?: boolean;
}>`
  position: fixed;
  inset: 0;

  z-index: ${({ $above }) => ($above ? 2000 : 1000)};

  background: rgba(0, 0, 0, 0.35);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 425px;

  max-height: calc(100vh - 40px);

  overflow-y: auto;

  background: #fffaf4;

  border-radius: 18px;

  padding: 24px;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  &&::-webkit-scrollbar {
    display: none;
  }

  position: absolute;
  right: 0;

  @media (max-width: 600px) {
    width: calc(100% - 20px);
    max-width: none;

    max-height: calc(100vh - 20px);

    right: 10px;

    padding: 18px;

    border-radius: 16px;
  }

  @media (max-width: 400px) {
    width: calc(100% - 12px);

    right: 6px;

    padding: 15px;

    border-radius: 14px;
  }
`;

export const SubModal = styled.div`
  width: 100%;
  max-width: 520px;

  max-height: calc(100vh - 60px);

  overflow-y: auto;

  background: #fffaf4;

  border-radius: 18px;

  padding: 24px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);

  scrollbar-width: thin;

  @media (max-width: 600px) {
    width: 100%;

    max-width: none;

    max-height: calc(100vh - 20px);

    padding: 18px;

    border-radius: 16px;
  }

  @media (max-width: 400px) {
    max-height: calc(100vh - 12px);

    padding: 15px;

    border-radius: 14px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 18px;

  border-bottom: 1px solid #e5d8c9;

  @media (max-width: 400px) {
    padding-bottom: 14px;
  }
`;

export const SubModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 18px;

  margin-bottom: 5px;

  border-bottom: 1px solid #e5d8c9;

  @media (max-width: 400px) {
    padding-bottom: 14px;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 0;

  color: #704016;

  font-size: 21px;
  font-weight: 800;

  @media (max-width: 400px) {
    gap: 7px;

    font-size: 18px;
  }
`;

export const SubModalTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 9px;

  margin: 0;

  color: #704016;

  font-size: 20px;
  font-weight: 800;

  @media (max-width: 400px) {
    gap: 7px;

    font-size: 17px;
  }
`;

export const CloseButton = styled.button`
  width: 34px;
  height: 34px;

  flex-shrink: 0;

  border: none;
  background: transparent;

  color: #704016;

  font-size: 28px;
  font-weight: 800;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 400px) {
    width: 30px;
    height: 30px;

    font-size: 24px;
  }
`;

export const Section = styled.section`
  padding: 18px 0;

  border-bottom: 1px solid #e5d8c9;

  &:last-of-type {
    border-bottom: none;
  }

  @media (max-width: 400px) {
    padding: 14px 0;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 12px;

  color: #704016;

  font-size: 16px;
  font-weight: 800;

  text-transform: uppercase;

  letter-spacing: 0.4px;

  @media (max-width: 400px) {
    margin-bottom: 10px;

    font-size: 14px;
  }
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  min-height: 26px;

  color: #704016;

  @media (max-width: 400px) {
    gap: 7px;

    font-size: 13px;
  }
`;

export const StatusIndicator = styled.span<{
  $online: boolean;
}>`
  width: 13px;
  height: 13px;

  flex-shrink: 0;

  border-radius: 50%;

  background: ${({ $online }) => ($online ? "#38a957" : "#c64d4d")};

  box-shadow: 0 0 0 5px
    ${({ $online }) =>
      $online ? "rgba(56, 169, 87, 0.12)" : "rgba(198, 77, 77, 0.12)"};

  @media (max-width: 400px) {
    width: 11px;
    height: 11px;
  }
`;

export const StatusText = styled.span<{
  $online: boolean;
}>`
  color: ${({ $online }) => ($online ? "#2e7f3e" : "#b64b4b")};

  font-weight: 800;

  min-width: 0;

  overflow-wrap: anywhere;

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const PrinterName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 13px 14px;

  margin-bottom: 10px;

  background: #f5ecdf;

  border-radius: 10px;

  color: #704016;

  font-weight: 800;

  min-width: 0;

  @media (max-width: 400px) {
    padding: 11px 10px;

    gap: 7px;

    font-size: 13px;
  }

  select {
    min-width: 0;

    width: 100%;

    overflow: hidden;

    text-overflow: ellipsis;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 15px;

  min-height: 35px;

  @media (max-width: 400px) {
    gap: 8px;

    min-height: 32px;
  }
`;

export const InfoLabel = styled.span`
  color: #777;

  font-weight: 800;

  min-width: 0;

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const InfoValue = styled.span<{
  $success?: boolean;
  $error?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 5px;

  color: ${({ $success, $error }) =>
    $success ? "#2f8240" : $error ? "#b64242" : "#704016"};

  font-weight: 800;

  text-align: right;

  min-width: 0;

  overflow-wrap: anywhere;

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const SmallInfo = styled.div`
  margin-top: 12px;
  margin-bottom: 7px;

  color: #777;

  font-size: 13px;
  font-weight: 700;

  overflow-wrap: anywhere;

  @media (max-width: 400px) {
    margin-top: 9px;

    font-size: 12px;
  }
`;

export const Select = styled.select`
  width: 100%;

  padding: 11px 12px;

  border: 1px solid #dfd0bf;

  border-radius: 9px;

  background: #fffdf9;

  color: #704016;

  font-size: 14px;
  font-weight: 700;

  outline: none;

  cursor: pointer;

  &:focus {
    border-color: #c6a16e;
  }

  @media (max-width: 400px) {
    padding: 10px;

    font-size: 13px;
  }
`;

export const ActionButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  margin-top: 12px;

  padding: 11px 14px;

  border: none;
  border-radius: 9px;

  background: #c6a16e;

  color: white;

  font-size: 14px;
  font-weight: 800;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    filter: brightness(0.96);
  }

  &:disabled {
    background: #ddd0c2;
    color: #999;

    cursor: not-allowed;
  }

  @media (max-width: 400px) {
    padding: 10px 11px;

    font-size: 13px;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  margin-top: 12px;

  padding: 10px 14px;

  border: 1px solid #c6a16e;

  border-radius: 9px;

  background: transparent;

  color: #704016;

  font-size: 14px;
  font-weight: 800;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #f5ecdf;
  }

  @media (max-width: 400px) {
    padding: 9px 10px;

    font-size: 13px;
  }
`;

export const DangerButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 11px 14px;

  border: none;
  border-radius: 9px;

  background: #b85c5c;

  color: white;

  font-size: 14px;
  font-weight: 800;

  cursor: pointer;

  &:disabled {
    background: #ddd0c2;
    color: #999;

    cursor: not-allowed;
  }

  @media (max-width: 400px) {
    padding: 10px 11px;

    font-size: 13px;
  }
`;

export const RefreshButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 7px;

  margin-top: 15px;

  padding: 12px;

  border: none;

  border-radius: 9px;

  background: #c6a16e;

  color: white;

  font-size: 14px;
  font-weight: 800;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    filter: brightness(0.96);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 400px) {
    margin-top: 12px;

    padding: 10px;

    font-size: 13px;
  }
`;

export const Loading = styled.div`
  padding: 35px 10px;

  text-align: center;

  color: #704016;

  font-weight: 700;

  @media (max-width: 400px) {
    padding: 25px 8px;

    font-size: 13px;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 12px;

  padding: 10px 12px;

  border-radius: 8px;

  background: #f9e4e4;

  color: #a83f3f;

  font-size: 13px;
  font-weight: 700;

  overflow-wrap: anywhere;

  @media (max-width: 400px) {
    padding: 9px 10px;

    font-size: 12px;
  }
`;

export const JobList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  max-height: 330px;

  overflow-y: auto;

  padding-right: 3px;

  @media (max-width: 400px) {
    max-height: 280px;
  }
`;

export const JobItem = styled.div<{
  $selected: boolean;
}>`
  display: flex;
  align-items: center;

  gap: 10px;

  padding: 12px;

  border: 1px solid ${({ $selected }) => ($selected ? "#c6a16e" : "#e5d8c9")};

  border-radius: 10px;

  background: ${({ $selected }) => ($selected ? "#f5e8d8" : "#fffdf9")};

  cursor: pointer;

  transition: 0.2s;

  min-width: 0;

  &:hover {
    background: #f8eee3;
  }

  @media (max-width: 400px) {
    gap: 7px;

    padding: 10px;
  }
`;

export const JobRadio = styled.input`
  width: 17px;
  height: 17px;

  flex-shrink: 0;

  accent-color: #c6a16e;

  cursor: pointer;

  @media (max-width: 400px) {
    width: 15px;
    height: 15px;
  }
`;

export const JobInfo = styled.div`
  flex: 1;

  min-width: 0;
`;

export const JobTitle = styled.div`
  color: #704016;

  font-size: 14px;
  font-weight: 800;

  overflow-wrap: anywhere;

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const JobStatus = styled.div`
  margin-top: 3px;

  color: #777;

  font-size: 12px;

  overflow-wrap: anywhere;

  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

export const CashOrderList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  max-height: 360px;

  overflow-y: auto;

  margin-top: 12px;

  padding-right: 3px;

  @media (max-width: 400px) {
    max-height: 300px;

    margin-top: 10px;
  }
`;

export const CashOrderItem = styled.div<{
  $selected: boolean;
}>`
  display: flex;
  align-items: center;

  gap: 10px;

  padding: 12px;

  border: 1px solid ${({ $selected }) => ($selected ? "#c6a16e" : "#e5d8c9")};

  border-radius: 10px;

  background: ${({ $selected }) => ($selected ? "#f5e8d8" : "#fffdf9")};

  cursor: pointer;

  transition: 0.2s;

  min-width: 0;

  &:hover {
    background: #f8eee3;
  }

  @media (max-width: 400px) {
    gap: 7px;

    padding: 10px;
  }
`;

export const CashOrderInfo = styled.div`
  flex: 1;

  min-width: 0;
`;

export const CashOrderTitle = styled.div`
  color: #704016;

  font-size: 15px;
  font-weight: 800;

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const CashOrderCustomer = styled.div`
  margin-top: 3px;

  overflow: hidden;

  color: #777;

  font-size: 12px;

  text-overflow: ellipsis;

  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

export const CashOrderTotal = styled.div`
  color: #704016;

  font-size: 14px;
  font-weight: 800;

  white-space: nowrap;

  flex-shrink: 0;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const EmptyMessage = styled.div`
  padding: 25px 15px;

  border-radius: 10px;

  background: #f5ecdf;

  color: #777;

  text-align: center;

  font-size: 14px;
  font-weight: 700;

  @media (max-width: 400px) {
    padding: 20px 10px;

    font-size: 12px;
  }
`;

export const ModalFooter = styled.div`
  margin-top: 16px;

  padding-top: 14px;

  border-top: 1px solid #e5d8c9;

  @media (max-width: 400px) {
    margin-top: 12px;

    padding-top: 11px;
  }
`;