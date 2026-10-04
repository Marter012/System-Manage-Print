import styled from "styled-components";

/* =====================================================
   MODAL
===================================================== */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: rgba(38, 24, 14, 0.58);

  backdrop-filter: blur(7px);

  animation: overlayIn 0.18s ease;

  @keyframes overlayIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const ModalContainer = styled.div`
  width: min(1120px, calc(100vw - 32px));

  height: min(760px, calc(100vh - 32px));

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border: 1px solid rgba(101, 48, 7, 0.1);
  border-radius: 22px;

  background: #fffaf6;

  box-shadow:
    0 30px 90px rgba(50, 27, 11, 0.28),
    0 8px 25px rgba(50, 27, 11, 0.12);

  animation: modalIn 0.22s ease;

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: translateY(8px) scale(0.985);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 700px) {
    width: calc(100vw - 20px);
    height: calc(80vh - 20px);

    border-radius: 18px;
  }
`;

export const ModalHeader = styled.header`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding: 20px 24px;

  border-bottom: 1px solid rgba(101, 48, 7, 0.08);

  background: rgba(255, 250, 246, 0.96);

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const ModalHeaderInfo = styled.div`
  min-width: 0;
`;

export const ModalTitle = styled.h2`
  margin: 0;

  color: #3e2a1e;

  font-size: 19px;
  font-weight: 850;
  letter-spacing: -0.3px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const ModalSubtitle = styled.p`
  margin: 4px 0 0;

  color: #938274;

  font-size: 11px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e3d7cc;
  border-radius: 10px;

  background: #fff;

  color: #806d5e;

  cursor: pointer;

  font-size: 13px;

  transition: 0.18s ease;

  &:hover {
    border-color: #cdb49d;
    background: #f7eee6;
    color: #653007;
  }
`;

export const ModalContent = styled.div`
  min-height: 0;

  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 18px 22px 22px;

  scrollbar-width: thin;
  scrollbar-color: #d4c1b0 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d4c1b0;
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    padding: 14px;
  }
`;

/* =====================================================
   FILTERS
===================================================== */

export const Filters = styled.div`
  display: flex;
  gap: 6px;

  width: fit-content;
  max-width: 100%;

  margin-bottom: 16px;
  padding: 4px;
    justify-content: space-between;

  overflow-x: auto;

  border: 1px solid rgba(101, 48, 7, 0.08);
  border-radius: 11px;

  background: #f3eae2;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    .show{
      display: none;
    }
  }
`;

export const FilterButton = styled.button<{
  $active: boolean;
}>`
  flex-shrink: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 7px;

  min-height: 34px;

  padding: 6px 12px;

  border: 1px solid
    ${({ $active }) =>
      $active
        ? "rgba(101, 48, 7, 0.08)"
        : "transparent"};

  border-radius: 8px;

  background: ${({ $active }) =>
    $active ? "#ffffff" : "transparent"};

  color: ${({ $active }) =>
    $active ? "#653007" : "#806d5e"};

  box-shadow: ${({ $active }) =>
    $active
      ? "0 2px 7px rgba(101,48,7,.07)"
      : "none"};

  cursor: pointer;

  font-family: inherit;
  font-size: 10px;
  font-weight: 850;

  transition: 0.18s ease;

  span {
    min-width: 20px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 2px 5px;

    border-radius: 20px;

    background: ${({ $active }) =>
      $active
        ? "#f3e7da"
        : "rgba(255,255,255,.55)"};

    font-size: 9px;
  }

  &:hover {
    background: #ffffff;
    color: #653007;
  }
`;

/* =====================================================
   MAIN
===================================================== */

export const MainLayout = styled.div`
  display: grid;

  grid-template-columns:
    minmax(250px, 0.75fr)
    minmax(0, 1.35fr);

  gap: 14px;

  min-width: 0;

  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* =====================================================
   USERS
===================================================== */

export const UsersPanel = styled.section`
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

  padding: 14px;

  border: 1px solid rgba(101, 48, 7, 0.09);
  border-radius: 17px;

  background: #f8f1eb;
`;

export const UsersPanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 10px;

  margin-bottom: 12px;
  padding: 2px 2px 0;

  color: #653007;

  svg {
    margin-top: 2px;

    font-size: 15px;

    opacity: 0.45;
  }
`;

export const UsersPanelTitle = styled.h3`
  margin: 0;

  color: #3e2a1e;

  font-size: 14px;
  font-weight: 850;
`;

export const UsersPanelSubtitle = styled.p`
  margin: 3px 0 0;

  color: #8b7868;

  font-size: 10px;
  line-height: 1.4;
`;

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 7px;

  min-height: 0;
  max-height: 510px;

  overflow-y: auto;

  padding-right: 2px;

  scrollbar-width: thin;
  scrollbar-color: #d5c2b1 transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d5c2b1;
    border-radius: 20px;
  }

  @media (max-width: 900px) {
    max-height: 270px;
  }

  @media (max-width: 600px) {
    max-height: 235px;
  }
`;

export const UserRow = styled.button<{
  $selected: boolean;
}>`
  position: relative;

  width: 100%;

  display: flex;
  align-items: center;

  gap: 10px;

  min-width: 0;

  padding: 10px;

  border: 1px solid
    ${({ $selected }) =>
      $selected
        ? "#c29e70"
        : "rgba(101,48,7,.07)"};

  border-radius: 12px;

  background: ${({ $selected }) =>
    $selected ? "#fffaf4" : "#ffffff"};

  color: inherit;

  text-align: left;

  cursor: pointer;

  box-shadow: ${({ $selected }) =>
    $selected
      ? "0 4px 13px rgba(101,48,7,.07)"
      : "none"};

  transition: 0.18s ease;

  &:hover {
    border-color: #c29e70;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid
      rgba(194, 158, 112, 0.22);

    outline-offset: 2px;
  }
`;

export const UserAvatar = styled.div<{
  $active: boolean;
}>`
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: ${({ $active }) =>
    $active ? "#f0dfcd" : "#e9e5e2"};

  color: ${({ $active }) =>
    $active ? "#653007" : "#8c827a"};

  font-size: 13px;
`;

export const UserMain = styled.div`
  min-width: 0;

  flex: 1;
`;

export const UserName = styled.strong`
  display: block;

  overflow: hidden;

  color: #3e2a1e;

  font-size: 12px;
  font-weight: 850;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserEmail = styled.span`
  display: block;

  overflow: hidden;

  margin-top: 2px;

  color: #8d7c6d;

  font-size: 9px;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserMeta = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;

  margin-top: 5px;
`;

export const UserRole = styled.span`
  color: #8b7664;

  font-size: 9px;
  font-weight: 700;
`;

export const UserStatus = styled.span<{
  $active: boolean;
}>`
  display: inline-flex;
  align-items: center;

  gap: 4px;

  padding: 2px 6px;

  border-radius: 20px;

  background: ${({ $active }) =>
    $active ? "#eaf4eb" : "#eeecea"};

  color: ${({ $active }) =>
    $active ? "#47724c" : "#847a73"};

  font-size: 8px;
  font-weight: 800;

  &::before {
    content: "";

    width: 4px;
    height: 4px;

    border-radius: 50%;

    background: currentColor;
  }
`;

export const SelectedIndicator = styled.div`
  width: 24px;
  height: 24px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #653007;

  color: white;

  font-size: 8px;
`;

/* =====================================================
   EDITOR
===================================================== */

export const EditorPanel = styled.section<{
  $empty?: boolean;
}>`
  min-width: 0;

  display: flex;
  flex-direction: column;

  padding: 17px;

  border: 1px solid rgba(101, 48, 7, 0.09);
  border-radius: 17px;

  background: #ffffff;

  ${({ $empty }) =>
    $empty &&
    `
      min-height: 420px;
      align-items: center;
      justify-content: center;
    `}

  @media (max-width: 600px) {
    padding: 14px;
  }
`;

export const EditorHeader = styled.div`
  margin-bottom: 17px;
  padding-bottom: 14px;

  border-bottom: 1px solid
    rgba(101, 48, 7, 0.08);
`;

export const EditorUser = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const EditorAvatar = styled.div<{
  $active: boolean;
}>`
  width: 44px;
  height: 44px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: ${({ $active }) =>
    $active ? "#f0dfcd" : "#ece9e6"};

  color: ${({ $active }) =>
    $active ? "#653007" : "#82776e"};

  font-size: 16px;
`;

export const EditorUserInfo = styled.div`
  min-width: 0;
`;

export const EditorUserName = styled.strong`
  display: block;

  overflow: hidden;

  color: #3e2a1e;

  font-size: 15px;
  font-weight: 850;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const EditorUserRole = styled.span`
  display: block;

  margin-top: 3px;

  color: #8b7868;

  font-size: 10px;
`;

/* =====================================================
   SECTIONS
===================================================== */

export const Section = styled.section`
  margin-bottom: 17px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 9px;

  margin-bottom: 11px;
`;

export const SectionIcon = styled.div<{
  $security?: boolean;
}>`
  width: 29px;
  height: 29px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: ${({ $security }) =>
    $security ? "#f0e7f6" : "#f5e8db"};

  color: ${({ $security }) =>
    $security ? "#76518c" : "#653007"};

  font-size: 11px;
`;

export const SectionTitle = styled.h4`
  margin: 0;

  color: #3e2a1e;

  font-size: 12px;
  font-weight: 850;
`;

export const SectionDescription = styled.p`
  margin: 2px 0 0;

  color: #938274;

  font-size: 9px;
  line-height: 1.4;
`;

export const FormGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 11px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const Label = styled.label`
  color: #634d3d;

  font-size: 9px;
  font-weight: 850;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  min-height: 39px;

  padding: 8px 10px;

  border: 1px solid #dfd2c6;
  border-radius: 9px;

  outline: none;

  background: #fffdfb;

  color: #3e2a1e;

  font-family: inherit;
  font-size: 11px;

  transition: 0.18s ease;

  &::placeholder {
    color: #b2a59a;
  }

  &:hover {
    border-color: #cdb7a2;
  }

  &:focus {
    border-color: #b88d64;

    box-shadow:
      0 0 0 3px
      rgba(194, 158, 112, 0.13);
  }
`;

export const Select = styled.select`
  width: 100%;
  box-sizing: border-box;

  min-height: 39px;

  padding: 8px 10px;

  border: 1px solid #dfd2c6;
  border-radius: 9px;

  outline: none;

  background: #fffdfb;

  color: #3e2a1e;

  font-family: inherit;
  font-size: 11px;

  cursor: pointer;

  &:focus {
    border-color: #b88d64;

    box-shadow:
      0 0 0 3px
      rgba(194, 158, 112, 0.13);
  }
`;

/* =====================================================
   SECURITY
===================================================== */

export const SecurityCard = styled.div`
  padding: 13px;

  border: 1px solid #e8ddd3;
  border-radius: 14px;

  background:
    linear-gradient(
      145deg,
      #fffdfb 0%,
      #fbf5ef 100%
    );
`;

export const SecurityHeader = styled.div`
  display: flex;
  align-items: center;

  gap: 9px;

  margin-bottom: 13px;
`;

export const SecurityIcon = styled.div`
  width: 36px;
  height: 36px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: #eee4f4;

  color: #76518c;

  font-size: 13px;
`;

export const SecurityText = styled.div`
  min-width: 0;
`;

export const SecurityTitle = styled.strong`
  display: block;

  color: #4b3a2d;

  font-size: 10px;
  font-weight: 850;
`;

export const SecurityDescription = styled.span`
  display: block;

  margin-top: 3px;

  color: #8c7b6c;

  font-size: 9px;
  line-height: 1.4;

  strong {
    color: #653007;
  }
`;

export const SecuritySteps = styled.div`
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 5px;

  margin-bottom: 13px;

  padding: 4px;

  border-radius: 10px;

  background: #f1e9e1;
`;

export const SecurityStep = styled.div<{
  $active: boolean;
  $completed: boolean;
}>`
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  padding: 6px 4px;

  border-radius: 7px;

  background: ${({ $active }) =>
    $active ? "#ffffff" : "transparent"};

  color: ${({ $active, $completed }) =>
    $active || $completed
      ? "#653007"
      : "#9a8b7f"};

  box-shadow: ${({ $active }) =>
    $active
      ? "0 2px 6px rgba(101,48,7,.07)"
      : "none"};

  transition: 0.18s ease;
`;

export const SecurityStepNumber = styled.div`
  width: 17px;
  height: 17px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: currentColor;

  color: white;

  font-size: 7px;
  font-weight: 850;
`;

export const SecurityStepText = styled.span`
  overflow: hidden;

  font-size: 8px;
  font-weight: 800;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SendCodeButton = styled.button`
  width: 100%;

  min-height: 42px;

  display: flex;
  align-items: center;

  gap: 8px;

  padding: 9px 11px;

  border: 1px solid #d8c1a9;
  border-radius: 10px;

  background: #f9eee2;

  color: #653007;

  cursor: pointer;

  font-family: inherit;
  font-size: 10px;
  font-weight: 850;

  transition: 0.18s ease;

  span {
    flex: 1;

    text-align: left;
  }

  svg:last-child {
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    border-color: #c29e70;

    background: #f5e4d3;

    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;

    cursor: wait;
  }
`;

export const CodeArea = styled.div`
  padding-top: 2px;
`;

export const CodeHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 10px;

  margin-bottom: 11px;

  strong {
    display: block;

    color: #4b3a2d;

    font-size: 10px;
    font-weight: 850;
  }

  span {
    display: block;

    margin-top: 3px;

    color: #938274;

    font-size: 9px;
  }
`;

export const CodeStatus = styled.div`
  display: inline-flex;
  align-items: center;

  gap: 4px;

  padding: 4px 7px;

  border-radius: 20px;

  background: #edf7ee;

  color: #47724c;

  font-size: 8px;
  font-weight: 800;

  white-space: nowrap;
`;

export const CodeInputs = styled.div`
  display: flex;
  justify-content: center;

  gap: 6px;

  margin: 13px 0;

  @media (max-width: 390px) {
    gap: 4px;
  }
`;

export const CodeInput = styled.input`
  width: 39px;
  height: 44px;

  box-sizing: border-box;

  border: 1px solid #dccfc3;
  border-radius: 9px;

  outline: none;

  background: #ffffff;

  color: #653007;

  text-align: center;

  font-family: inherit;
  font-size: 16px;
  font-weight: 850;

  transition: 0.18s ease;

  &:focus {
    border-color: #b88d64;

    background: #fffaf4;

    box-shadow:
      0 0 0 3px
      rgba(194, 158, 112, 0.14);
  }

  @media (max-width: 390px) {
    width: 34px;
    height: 41px;

    font-size: 14px;
  }

  @media (max-width: 330px) {
    width: 29px;
    height: 38px;
  }
`;

export const VerifyCodeButton = styled.button`
  width: 100%;

  min-height: 41px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 7px;

  padding: 8px 12px;

  border: none;
  border-radius: 9px;

  background: #653007;

  color: white;

  cursor: pointer;

  font-family: inherit;
  font-size: 10px;
  font-weight: 850;

  transition: 0.18s ease;

  &:hover:not(:disabled) {
    background: #512505;

    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.4;

    cursor: not-allowed;
  }
`;

export const ResendButton = styled.button`
  width: 100%;

  margin-top: 6px;

  padding: 7px;

  border: none;

  background: transparent;

  color: #806d5e;

  cursor: pointer;

  font-family: inherit;
  font-size: 9px;
  font-weight: 750;

  &:hover:not(:disabled) {
    color: #653007;

    text-decoration: underline;
  }

  &:disabled {
    opacity: 0.5;

    cursor: wait;
  }
`;

export const SecuritySuccess = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  margin-bottom: 12px;
  padding: 9px;

  border: 1px solid #d5e8d7;
  border-radius: 9px;

  background: #f2f9f3;

  color: #47724c;

  svg {
    flex-shrink: 0;
  }

  strong {
    display: block;

    font-size: 9px;
    font-weight: 850;
  }

  span {
    display: block;

    margin-top: 2px;

    color: #718875;

    font-size: 8px;
  }
`;

export const PasswordArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: 9px;
`;

export const PasswordInput = styled(Input)`
  min-height: 41px;
`;

export const PasswordState = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

export const PasswordStateIcon = styled.div`
  width: 26px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 7px;

  background: #f1e9f5;

  color: #76518c;

  font-size: 9px;
`;

export const PasswordStateText = styled.div`
  strong {
    display: block;

    color: #5a4a3e;

    font-size: 9px;
  }

  span {
    display: block;

    margin-top: 2px;

    color: #938274;

    font-size: 8px;
  }
`;

/* =====================================================
   STATUS
===================================================== */

export const StatusCard = styled.button<{
  $active: boolean;
}>`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 9px;

  padding: 10px;

  border: 1px solid
    ${({ $active }) =>
      $active ? "#d3e5d5" : "#e0dbd7"};

  border-radius: 11px;

  background: ${({ $active }) =>
    $active ? "#f4faf5" : "#f6f4f2"};

  text-align: left;

  cursor: pointer;

  transition: 0.18s ease;

  &:hover {
    transform: translateY(-1px);

    border-color: ${({ $active }) =>
      $active ? "#bcd5bf" : "#cfc7c1"};
  }
`;

export const StatusIcon = styled.div<{
  $active: boolean;
}>`
  width: 33px;
  height: 33px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: ${({ $active }) =>
    $active ? "#e2f0e4" : "#ebe8e5"};

  color: ${({ $active }) =>
    $active ? "#47724c" : "#81776f"};

  font-size: 13px;
`;

export const StatusContent = styled.div`
  min-width: 0;

  flex: 1;
`;

export const StatusTitle = styled.strong`
  display: block;

  color: #4b3a2d;

  font-size: 10px;
  font-weight: 850;
`;

export const StatusDescription = styled.span`
  display: block;

  margin-top: 2px;

  color: #8d7d70;

  font-size: 8px;
`;

export const StatusArrow = styled.div`
  color: #aa9a8c;

  font-size: 9px;
`;

/* =====================================================
   FOOTER
===================================================== */

export const FooterSpacer = styled.div`
  flex: 1;
  min-height: 4px;
`;

export const EditorFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 8px;

  margin-top: 3px;
  padding-top: 14px;

  border-top: 1px solid
    rgba(101, 48, 7, 0.08);

  @media (max-width: 450px) {
    flex-direction: column-reverse;
  }
`;

export const CancelButton = styled.button`
  min-height: 39px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  padding: 8px 14px;

  border: 1px solid #dfd3c9;
  border-radius: 9px;

  background: white;

  color: #76665a;

  cursor: pointer;

  font-family: inherit;
  font-size: 10px;
  font-weight: 800;

  &:hover:not(:disabled) {
    background: #f7f2ee;
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const SaveButton = styled.button`
  min-height: 39px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  padding: 8px 16px;

  border: none;
  border-radius: 9px;

  background: #653007;

  color: white;

  cursor: pointer;

  font-family: inherit;
  font-size: 10px;
  font-weight: 850;

  box-shadow:
    0 4px 10px
    rgba(101, 48, 7, 0.14);

  transition: 0.18s ease;

  &:hover:not(:disabled) {
    background: #512505;

    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;

    cursor: wait;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

/* =====================================================
   EMPTY
===================================================== */

export const EmptyState = styled.div`
  min-height: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 30px;

  text-align: center;

  color: #8c7c6e;

  div {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 12px;

    border-radius: 14px;

    background: #f3e8dd;

    color: #8a684c;

    font-size: 18px;
  }

  strong {
    color: #5a4434;

    font-size: 13px;
    font-weight: 850;
  }

  span {
    max-width: 230px;

    margin-top: 5px;

    color: #9b8c80;

    font-size: 10px;
    line-height: 1.5;
  }
`;

/* =====================================================
   STATES
===================================================== */

export const LoadingState = styled.div`
  min-height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #806d5e;

  font-size: 12px;

  &::before {
    content: "";

    width: 17px;
    height: 17px;

    margin-right: 9px;

    border: 2px solid #e4d7ca;
    border-top-color: #653007;

    border-radius: 50%;

    animation: spin 0.7s linear infinite;
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

  gap: 7px;

  margin-bottom: 11px;
  padding: 9px 11px;

  border: 1px solid #e6c4c4;
  border-radius: 9px;

  background: #fff5f5;

  color: #9b4444;

  font-size: 9px;
  font-weight: 700;

  animation: messageIn 0.18s ease;
`;

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;

  gap: 7px;

  margin-bottom: 11px;
  padding: 9px 11px;

  border: 1px solid #d1e5d4;
  border-radius: 9px;

  background: #f2f9f3;

  color: #47724c;

  font-size: 9px;
  font-weight: 700;

  animation: messageIn 0.18s ease;

  svg {
    flex-shrink: 0;
  }
`;

const messageAnimation = `
  @keyframes messageIn {
    from {
      opacity: 0;
      transform: translateY(-3px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

ErrorMessage.componentStyle.rules.push(
  messageAnimation,
);

SuccessMessage.componentStyle.rules.push(
  messageAnimation,
);