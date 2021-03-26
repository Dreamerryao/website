import React, { memo, FC } from "react";
import styled from "styled-components";
import MoveInWidthwise from "../common_components/MoveInWidthwise";
import SelfIntro from "../components/SelfIntro";

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(/assets/selfBg.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  mix-blend-mode: difference;
  font-family: GenJyuuGothicX-Monospace-Heavy, Comic Sans MS;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2;
`;
const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
`;
const About: FC = () => {
  return (
    <div>
      <MoveInWidthwise displayed={<SelfIntro />} />
      <Page>
        <div>Contact me</div>
        <div>
          GitHub:{" "}
          <StyledA href="https://github.com/Dreamerryao">Dreamerryao</StyledA>
        </div>
        <div style={{ fontSize: "1.5rem" }}>QQ: 244791255</div>
      </Page>
    </div>
  );
};
export default memo(About);
