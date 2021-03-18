import React, { memo, FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TabContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 2;
  background-color: transparent;
  color: white;
  mix-blend-mode: difference;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: flex-end;
`;
const StyledLink = styled(Link)`
  margin: 0 24px;
  text-decoration: none;
  color: inherit;
  font-size: 24px;
  mix-blend-mode: difference;
  font-family: Chalkduster,Comic Sans MS;
  font-weight: 600;
`;
const Tab: FC = () => {
  return (
    <TabContainer>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/404">404</StyledLink>
    </TabContainer>
  );
};
export default memo(Tab);
