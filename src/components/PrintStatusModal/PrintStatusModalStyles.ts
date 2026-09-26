import styled from "styled-components";

export const Overlay = styled.div<{
  $above?: boolean;
}>`
  position: fixed;
  inset: 0;

  z-index: ${({ $above }) =>
    $above ? 1002 : 1000};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: rgba(25, 17, 12, 0.62);

  backdrop-filter: blur(7px);

  animation: fadeIn 0.18s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 0;
    align-items: flex-end;
  }
`;

export const Modal = styled.div`
  width: min(980px, 100%);

  max-height: calc(100vh - 48px);

  overflow-y: auto;

  background: #faf8f5;

  border: 1px solid rgba(101, 48, 7, 0.12);

  border-radius: 24px;

  box-shadow:
    0 28px 70px rgba(48, 27, 14, 0.28),
    0 8px 24px rgba(48, 27, 14, 0.12);

  color: #321b0d;

  scrollbar-width: thin;

  scrollbar-color:
    rgba(101, 48, 7, 0.3)
    transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(101, 48, 7, 0.28);
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-height: 94vh;

    border-radius: 24px 24px 0 0;
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  padding: 22px 24px;

  background:
    linear-gradient(
      135deg,
      #653007 0%,
      #7c421c 55%,
      #9a6338 100%
    );

  color: white;

  border-radius: 24px 24px 0 0;

  box-shadow:
    0 8px 24px rgba(75, 38, 12, 0.18);

  @media (max-width: 600px) {
    padding: 18px;
    border-radius: 24px 24px 0 0;
  }
`;

export const HeaderLeft = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h2`
  margin: 0;

  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 1.35rem;
  font-weight: 800;

  letter-spacing: -0.02em;

  svg {
    flex-shrink: 0;
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Subtitle = styled.span`
  color: rgba(255, 255, 255, 0.72);

  font-size: 0.82rem;
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border: 1px solid
    rgba(255, 255, 255, 0.22);

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.1);

  color: white;

  cursor: pointer;

  transition:
    background 0.18s ease,
    transform 0.18s ease;

  svg {
    font-size: 1.3rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.04);
  }
`;

export const DashboardGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 14px;

  padding: 22px 24px 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    padding: 16px 16px 0;
  }
`;

export const StatusCard = styled.div<{
  $active?: boolean;
}>`
  position: relative;

  overflow: hidden;

  min-width: 0;

  padding: 18px;

  border-radius: 18px;

  border: 1px solid
    ${({ $active }) =>
      $active
        ? "rgba(42, 125, 72, 0.18)"
        : "rgba(101, 48, 7, 0.12)"};

  background: ${({ $active }) =>
    $active
      ? "linear-gradient(145deg, #f5fbf6, #ffffff)"
      : "linear-gradient(145deg, #f8f3ee, #ffffff)"};

  box-shadow:
    0 8px 22px
      rgba(60, 35, 20, 0.06);

  &::after {
    content: "";

    position: absolute;

    width: 90px;
    height: 90px;

    right: -35px;
    bottom: -40px;

    border-radius: 50%;

    background: ${({ $active }) =>
      $active
        ? "rgba(63, 145, 83, 0.08)"
        : "rgba(101, 48, 7, 0.05)"};
  }
`;

export const StatusCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const StatusIcon = styled.div<{
  $active?: boolean;
}>`
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 12px;

  background: ${({ $active }) =>
    $active
      ? "rgba(50, 142, 77, 0.11)"
      : "rgba(101, 48, 7, 0.08)"};

  color: ${({ $active }) =>
    $active ? "#328e4d" : "#8b6243"};

  svg {
    font-size: 1.35rem;
  }
`;

export const StatusDot = styled.span<{
  $active?: boolean;
}>`
  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: ${({ $active }) =>
    $active ? "#38a45a" : "#b8a99d"};

  box-shadow: ${({ $active }) =>
    $active
      ? "0 0 0 4px rgba(56, 164, 90, 0.1)"
      : "none"};
`;

export const StatusCardTitle = styled.div`
  color: #75573f;

  font-size: 0.78rem;
  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: 0.06em;
`;

export const StatusCardValue = styled.div<{
  $active?: boolean;
}>`
  margin-top: 3px;

  color: ${({ $active }) =>
    $active ? "#277440" : "#78583f"};

  font-size: 1.12rem;
  font-weight: 800;
`;

export const StatusCardDescription = styled.div`
  margin-top: 5px;

  color: #8d7b6c;

  font-size: 0.75rem;

  line-height: 1.4;
`;

export const StatusBanner = styled.div<{
  $success?: boolean;
}>`
  display: flex;
  align-items: center;

  gap: 13px;

  margin: 18px 24px 0;

  padding: 14px 16px;

  border: 1px solid
    ${({ $success }) =>
      $success
        ? "rgba(47, 143, 76, 0.18)"
        : "rgba(190, 128, 47, 0.2)"};

  border-radius: 16px;

  background: ${({ $success }) =>
    $success
      ? "#f1faf3"
      : "#fff9ed"};

  @media (max-width: 600px) {
    margin: 16px 16px 0;
  }
`;

export const StatusBannerIcon = styled.div<{
  $success?: boolean;
}>`
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 11px;

  background: ${({ $success }) =>
    $success
      ? "rgba(47, 143, 76, 0.11)"
      : "rgba(190, 128, 47, 0.1)"};

  color: ${({ $success }) =>
    $success ? "#2f8f4c" : "#b47a2f"};

  svg {
    font-size: 1.35rem;
  }
`;

export const StatusBannerText = styled.div`
  min-width: 0;
`;

export const StatusBannerTitle = styled.div`
  color: #4d3423;

  font-size: 0.9rem;
  font-weight: 800;
`;

export const StatusBannerDescription = styled.div`
  margin-top: 2px;

  color: #806e60;

  font-size: 0.76rem;

  line-height: 1.4;
`;

export const Section = styled.section`
  margin: 18px 24px 0;

  padding: 19px;

  border: 1px solid
    rgba(101, 48, 7, 0.1);

  border-radius: 18px;

  background: #ffffff;

  box-shadow:
    0 6px 20px
      rgba(50, 29, 17, 0.045);

  @media (max-width: 600px) {
    margin: 14px 16px 0;

    padding: 16px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 12px;

  margin-bottom: 16px;

  > svg {
    color: #a4876b;
    font-size: 1.25rem;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0;

  display: flex;
  align-items: center;
  gap: 9px;

  color: #4b2c19;

  font-size: 1rem;
  font-weight: 800;
`;

export const SectionIcon = styled.span`
  width: 30px;
  height: 30px;

  display: grid;
  place-items: center;

  border-radius: 9px;

  background: rgba(101, 48, 7, 0.08);

  color: #653007;

  svg {
    font-size: 1rem;
  }
`;

export const SectionDescription = styled.p`
  margin: 5px 0 0 39px;

  color: #927f70;

  font-size: 0.76rem;

  line-height: 1.45;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 7px;
  }
`;

export const PrinterSelector = styled.div`
  display: flex;
  align-items: center;

  gap: 14px;

  padding: 15px;

  border-radius: 14px;

  background: #faf7f3;

  border: 1px solid
    rgba(101, 48, 7, 0.08);
`;

export const PrinterIcon = styled.div`
  width: 44px;
  height: 44px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 12px;

  background: #653007;

  color: white;

  svg {
    font-size: 1.25rem;
  }
`;

export const PrinterSelect = styled.select`
  display: block;

  width: 100%;

  margin-top: 4px;

  padding: 0;

  border: 0;

  outline: 0;

  background: transparent;

  color: #3f2819;

  font-size: 0.95rem;
  font-weight: 800;

  cursor: pointer;
`;

export const InfoGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 10px;

  margin-top: 12px;

  @media (max-width: 760px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  min-width: 0;

  padding: 13px;

  border-radius: 13px;

  background: #fbf9f7;

  border: 1px solid
    rgba(101, 48, 7, 0.07);
`;

export const InfoLabel = styled.div`
  color: #9a8777;

  font-size: 0.7rem;
  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: 0.045em;
`;

export const InfoValue = styled.div<{
  $success?: boolean;
  $error?: boolean;
}>`
  margin-top: 4px;

  display: flex;
  align-items: center;

  gap: 5px;

  min-width: 0;

  color: ${({ $success, $error }) => {
    if ($success) {
      return "#2d8a4b";
    }

    if ($error) {
      return "#b54b3c";
    }

    return "#4d3523";
  }};

  font-size: 0.85rem;
  font-weight: 750;

  word-break: break-word;
`;

export const QueueSummary = styled.div`
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 10px;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const QueueSummaryItem = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  padding: 14px;

  border-radius: 14px;

  background: #faf7f3;

  border: 1px solid
    rgba(101, 48, 7, 0.08);
`;

export const QueueSummaryIcon = styled.div`
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 11px;

  background: rgba(101, 48, 7, 0.08);

  color: #653007;

  svg {
    font-size: 1.15rem;
  }
`;

export const QueueBadgeLabel = styled.div`
  color: #8d7868;

  font-size: 0.72rem;
  font-weight: 700;
`;

export const QueueBadgeValue = styled.div`
  margin-top: 1px;

  color: #4a2b18;

  font-size: 1.2rem;
  font-weight: 850;
`;

export const QueueBadge = styled.div<{
  $warning?: boolean;
}>`
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 7px;

  padding: 9px 12px;

  border-radius: 11px;

  background: ${({ $warning }) =>
    $warning
      ? "#fff5df"
      : "#eef9f1"};

  color: ${({ $warning }) =>
    $warning ? "#a86c20" : "#347849"};

  font-size: 0.77rem;
  font-weight: 750;

  svg {
    font-size: 1rem;
  }
`;

export const ActionGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 10px;

  margin-top: 12px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionButton = styled.button`
  min-height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 10px 14px;

  border: 0;
  border-radius: 12px;

  background: #653007;

  color: white;

  font-size: 0.82rem;
  font-weight: 750;

  cursor: pointer;

  transition:
    transform 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;

  &:hover:not(:disabled) {
    background: #7b3d10;

    transform: translateY(-1px);

    box-shadow:
      0 7px 18px
        rgba(101, 48, 7, 0.18);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.1rem;
  }
`;

export const SecondaryButton = styled.button`
  min-height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 10px 14px;

  border: 1px solid
    rgba(101, 48, 7, 0.15);

  border-radius: 12px;

  background: white;

  color: #653007;

  font-size: 0.82rem;
  font-weight: 750;

  cursor: pointer;

  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease;

  &:hover {
    background: #faf5f0;

    border-color:
      rgba(101, 48, 7, 0.28);

    transform: translateY(-1px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

export const DangerButton = styled.button`
  min-height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 10px 15px;

  border: 0;

  border-radius: 12px;

  background: #b64d3d;

  color: white;

  font-size: 0.82rem;
  font-weight: 750;

  cursor: pointer;

  &:hover:not(:disabled) {
    background: #9f3e31;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.05rem;
  }
`;

export const RefreshButton = styled.button`
  min-height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 9px 15px;

  border: 1px solid
    rgba(101, 48, 7, 0.16);

  border-radius: 12px;

  background: white;

  color: #653007;

  font-size: 0.8rem;
  font-weight: 750;

  cursor: pointer;

  transition:
    background 0.18s ease,
    transform 0.18s ease;

  &:hover:not(:disabled) {
    background: #faf5f0;

    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.1rem;
  }
`;

export const ResponsiveRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  margin: 18px 24px 22px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: stretch;

    margin: 14px 16px 18px;
  }
`;

export const SmallInfo = styled.span`
  color: #9a8777;

  font-size: 0.74rem;
`;

export const Loading = styled.div`
  min-height: 360px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 12px;

  color: #765b45;

  font-size: 0.9rem;
  font-weight: 700;

  svg {
    font-size: 1.8rem;

    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;

  gap: 9px;

  margin: 14px 24px 0;

  padding: 12px 14px;

  border: 1px solid
    rgba(182, 77, 61, 0.16);

  border-radius: 12px;

  background: #fff2f0;

  color: #a44032;

  font-size: 0.8rem;
  font-weight: 650;

  svg {
    flex-shrink: 0;
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    margin: 14px 16px 0;
  }
`;

export const EmptyMessage = styled.div`
  min-height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 20px;

  border-radius: 13px;

  background: #faf8f6;

  color: #927f70;

  font-size: 0.8rem;

  text-align: center;

  svg {
    color: #579267;
    font-size: 1.15rem;
  }
`;

export const SubModalOverlay = styled(Overlay)`
  z-index: 1010;

  background: rgba(25, 17, 12, 0.72);
`;

export const SubModal = styled.div`
  width: min(720px, 100%);

  max-height: calc(100vh - 48px);

  overflow-y: auto;

  padding-bottom: 20px;

  border-radius: 22px;

  background: #faf8f5;

  box-shadow:
    0 30px 80px
      rgba(30, 18, 10, 0.35);

  scrollbar-width: thin;

  @media (max-width: 600px) {
    width: 100%;

    max-height: 94vh;

    border-radius: 22px 22px 0 0;
  }
`;

export const SubModalHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  padding: 17px 20px;

  background: #653007;

  color: white;

  border-radius: 22px 22px 0 0;

  @media (max-width: 600px) {
    border-radius: 22px 22px 0 0;
  }
`;

export const SubModalTitle = styled.h3`
  margin: 0;

  display: flex;
  align-items: center;

  gap: 9px;

  font-size: 1rem;

  svg {
    font-size: 1.2rem;
  }
`;

export const SubModalClose = styled.button`
  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  border: 1px solid
    rgba(255, 255, 255, 0.2);

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.08);

  color: white;

  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.17);
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const JobList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 8px;
`;

export const JobItem = styled.div<{
  $selected?: boolean;
}>`
  display: flex;
  align-items: center;

  gap: 11px;

  padding: 12px;

  border: 1px solid
    ${({ $selected }) =>
      $selected
        ? "rgba(101, 48, 7, 0.3)"
        : "rgba(101, 48, 7, 0.08)"};

  border-radius: 13px;

  background: ${({ $selected }) =>
    $selected ? "#f7eee7" : "#ffffff"};

  cursor: pointer;

  transition:
    background 0.16s ease,
    border-color 0.16s ease,
    transform 0.16s ease;

  &:hover {
    transform: translateY(-1px);

    background: #fbf6f1;

    border-color:
      rgba(101, 48, 7, 0.18);
  }
`;

export const JobSelection = styled.div`
  width: 22px;

  display: grid;
  place-items: center;

  input {
    accent-color: #653007;

    width: 16px;
    height: 16px;

    cursor: pointer;
  }
`;

export const JobIcon = styled.div`
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 10px;

  background: rgba(101, 48, 7, 0.08);

  color: #653007;

  svg {
    font-size: 1.15rem;
  }
`;

export const JobInfo = styled.div`
  min-width: 0;

  flex: 1;
`;

export const JobTitle = styled.div`
  overflow: hidden;

  color: #4b2c19;

  font-size: 0.84rem;
  font-weight: 800;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const JobStatus = styled.div`
  margin-top: 3px;

  color: #806e60;

  font-size: 0.74rem;
`;

export const JobMeta = styled.div`
  margin-top: 2px;

  color: #9a8777;

  font-size: 0.7rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 12px;

  @media (max-width: 560px) {
    button {
      width: 100%;
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;

  flex-direction: column;

  gap: 6px;
`;

export const SelectLabel = styled.label`
  color: #765b45;

  font-size: 0.74rem;
  font-weight: 750;
`;

export const Select = styled.select`
  width: 100%;

  min-height: 44px;

  padding: 0 13px;

  border: 1px solid
    rgba(101, 48, 7, 0.14);

  border-radius: 12px;

  outline: none;

  background: white;

  color: #4d3523;

  font-size: 0.82rem;
  font-weight: 650;

  cursor: pointer;

  &:focus {
    border-color: #8b542a;

    box-shadow:
      0 0 0 3px
        rgba(101, 48, 7, 0.08);
  }
`;

export const OrderList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 8px;

  margin-top: 12px;
`;

export const OrderItem = styled.div<{
  $selected?: boolean;
}>`
  display: flex;
  align-items: center;

  gap: 11px;

  padding: 13px;

  border: 1px solid
    ${({ $selected }) =>
      $selected
        ? "rgba(101, 48, 7, 0.3)"
        : "rgba(101, 48, 7, 0.08)"};

  border-radius: 13px;

  background: ${({ $selected }) =>
    $selected ? "#f7eee7" : "#ffffff"};

  cursor: pointer;

  transition:
    transform 0.16s ease,
    background 0.16s ease,
    border-color 0.16s ease;

  &:hover {
    transform: translateY(-1px);

    background: #fbf6f1;
  }
`;

export const OrderIcon = styled.div`
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 11px;

  background: rgba(101, 48, 7, 0.08);

  color: #653007;

  svg {
    font-size: 1.2rem;
  }
`;

export const OrderInfo = styled.div`
  min-width: 0;

  flex: 1;
`;

export const OrderTitle = styled.div`
  color: #4b2c19;

  font-size: 0.84rem;
  font-weight: 800;
`;

export const OrderCustomer = styled.div`
  overflow: hidden;

  margin-top: 3px;

  color: #8a7666;

  font-size: 0.74rem;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const OrderTotal = styled.div`
  flex-shrink: 0;

  color: #653007;

  font-size: 0.85rem;
  font-weight: 850;

  @media (max-width: 420px) {
    font-size: 0.78rem;
  }
`;