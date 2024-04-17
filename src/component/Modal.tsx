import styled from "styled-components";
import { ModalHeaderProps, ModalProps } from "../global/interface";

const Modal: React.FC<ModalProps> = ({
  header,
  description,
  isError = false,
}) => {
  return (
    <ModalContainer>
      <ModalHeader color={isError ? "#FF0000" : "OOOOOO"}>{header}</ModalHeader>
      <ModalDescription>{description}</ModalDescription>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: min(100%, 350px);
  height: fit-content;
  border: 10px;
  pading: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  transform: translateY(40%);
  box-shadow: 1px 1px 4px rgba(128, 128, 128, 0.5);
`;

const ModalHeader = styled.h2<ModalHeaderProps>`
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem;
border: 1px solid #dcdabb;
 text-shadow:1px 2px 2px black;
  border-radius:10px;
  background-color:
  box-shadow: 1px 1px 4px #dcdabb; 
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

const ModalDescription = styled.p`
  font-size: 1.5rem;
  padding: 0.5rem;
  text-align: center;
`;
