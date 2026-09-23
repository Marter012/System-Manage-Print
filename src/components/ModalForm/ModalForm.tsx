import type { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  CloseButton,
} from "./ModalFormStyles.ts";

interface ModalFormProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const ModalForm = ({ isOpen, title, onClose, children }: ModalFormProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <h3>{title}</h3>

          <CloseButton type="button" onClick={onClose}>
            <IoClose />
          </CloseButton>
        </ModalHeader>

        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalForm;
