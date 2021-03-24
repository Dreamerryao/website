import React, { memo, FC, ReactNode } from "react";
import styled from "styled-components";
interface IconButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

const Container = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  z-index: 2;
  position: absolute;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconButton: FC<IconButtonProps> = ({ onClick, children }) => {
  return (
    <Container onClick={onClick}>
      <div style={{ width: "40px", height: "40px" }}>{children}</div>
    </Container>
  );
};
export default memo(IconButton);
