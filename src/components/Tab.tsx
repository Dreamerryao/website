import React, { memo, FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TabContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 2;
  background-color: transparent;
  /* color: white; */
  mix-blend-mode: difference;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: flex-end;
`;
const StyledLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  mix-blend-mode: difference;
  font-family: GenJyuuGothicX-Monospace-Heavy, Comic Sans MS;
  font-weight: 600;
`;
const Tab: FC = () => {
  return (
    <TabContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/blog">Blog</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/404">Wow</StyledLink>
    </TabContainer>
  );
};
export default memo(Tab);
