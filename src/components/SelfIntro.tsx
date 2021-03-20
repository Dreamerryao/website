import React, { memo, FC } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../assets/arrow_down.svg";
const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;
const Page = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
`;
const Me = styled.div`
  background-image: url(/assets/me.jpg);
  width: 58vw;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`;
const Intro = styled.div`
  width: 42vw;
  height: 100%;
  font-family: GenJyuuGothicX-Monospace-Heavy, Comic Sans MS;
  padding: 80px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledArrow = styled(Arrow)`
  height: 50px;
  width: 50px;
  margin-top: 32px;
  animation: blink 3s infinite ease-in-out;
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const TimeLine = styled.ul`
  list-style-type: none;
  display: flex;
  border-top: 2px solid #1b3b6c;
  width: auto;
  height: auto;
  padding: 0px;
  margin: 0px;
`;

const TimeLineItem = styled.li`
  float: left;
  position: relative;
  /* text-align: center; */
  margin-right: 40px;
  min-width: 300px;
  width: auto;
  font-family: GenJyuuGothicX-Monospace-Heavy, Comic Sans MS;
  padding-top: 20px;
`;
const TimeLineMark = styled.b`
  content: "";
  position: absolute;
  top: -14px;
  left: 0;
  width: 24px;
  height: 24px;
  border: 2px solid white;
  border-radius: 14px;
  background: #00ccb1;
`;
const Title = styled.p`
  font-size: 2rem;
  line-height: 1;
  white-space: nowrap;
`;
const StyledP = styled.p`
  font-size: 1.5rem;
  line-height: 1.2;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
`;
const ZJU = styled.div`
  background-image: url(/assets/zju.jpg);
  background-repeat: no-repeat;
  background-position: 20%;
  width: 1000px;
  background-size: contain;
  transform: translateY(-20%);
  margin-right: 40px;
`;

const SelfIntro: FC = () => {
  return (
    <Container>
      <Page>
        <Me />
        <Intro>
          <p style={{ fontWeight: 900, fontSize: "4rem", lineHeight: 1.18 }}>
            Hi,I'm Dreamerryao.
          </p>
          <Title>Undergraduate Student in Zhejiang University.</Title>
          <Title>
            Major in <strong>information security</strong>.
          </Title>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StyledArrow />
          </div>
        </Intro>
      </Page>
      <TimeLine>
        <TimeLineItem>
          <TimeLineMark></TimeLineMark>
          <Title>2018</Title>
          <StyledP>got adimission to Zhejiang University</StyledP>
        </TimeLineItem>
        <ZJU />
        <TimeLineItem>
          <TimeLineMark></TimeLineMark>
          <TimeLineMark></TimeLineMark>
          <Title>2019</Title>
          <StyledP>First Level Scholarship</StyledP>
          <StyledP>School-level outstanding league cadres</StyledP>
          <StyledP>
            Join{" "}
            <StyledA href="https://zjuidg.org/">
              <strong>ZJUIDG,the State Key Lab of CAD&CG</strong>
            </StyledA>{" "}
            which manager is{" "}
            <StyledA href="http://www.ycwu.org">Yingcai Wu</StyledA>
          </StyledP>
        </TimeLineItem>
        <TimeLineItem>
          <TimeLineMark></TimeLineMark>
          <Title>2020</Title>
          <StyledP>National Scholarship</StyledP>
          <StyledP>
            Co-author of{" "}
            <strong>
              Visual Analytics of Multivariate Event Sequence Data in Racquet
              Sports
            </strong>
          </StyledP>
          <StyledP>
            Join{" "}
            <StyledA href="https://www.molardata.com/">
              <strong>Molardata Tech</strong>
            </StyledA>
          </StyledP>
          <StyledP>Join NextLab of Zhejiang University</StyledP>
        </TimeLineItem>
        <TimeLineItem>
          <TimeLineMark></TimeLineMark>
          <Title>2021</Title>
          <StyledP>Join ByteDance</StyledP>
        </TimeLineItem>
        <TimeLineItem>
          <TimeLineMark></TimeLineMark>
          <Title>To be Continue...</Title>
        </TimeLineItem>
      </TimeLine>
    </Container>
  );
};
export default memo(SelfIntro);
