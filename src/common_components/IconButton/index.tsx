import React, { memo, FC, ReactNode } from "react";
import styled from "styled-components";
interface IconButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

const Container = styled.div`
    width:50px;
    height:40px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index:1;
    position:absolute;
    bottom:10px;
    right:20px;
`;

const IconButton: FC<IconButtonProps> = ({ onClick, children }) => {
  return <Container>{children}</Container>;
};
export default memo(IconButton);
