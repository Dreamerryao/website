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
  // width: 100vw;
  display: flex;
  align-items: center;
`;
const Me = styled.div`
  background-image: url(/assets/me.jpg);
  width: 58vw;
  min-width: 400px;
  height: 100%;
  background-repeat: no-repeat;
  border-radius: 8px;
  background-position: 50%;
  background-size: cover;
`;
const Intro = styled.div`
  // width: 42vw;
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
  margin-right: 100px;
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
  text-decoration: underline;
  color: inherit;
`;
const ZJU = styled.div`
  background-image: url(/assets/zju.jpg);
  background-repeat: no-repeat;
  background-position: 20%;
  width: 1200px;
  background-size: cover;
  transform: translateY(-20%);
  margin-right: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
            Major in <strong>Information Security</strong>.
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
          <StyledP>Got adimission to Zhejiang University{"   "}</StyledP>
        </TimeLineItem>
        <ZJU />
        <TimeLineItem>
          <TimeLineMark></TimeLineMark>
          <TimeLineMark></TimeLineMark>
          <Title>2019</Title>
          <StyledP>The First Prize Scholarship</StyledP>
          <StyledP>School-level Outstanding league Cadres</StyledP>
          <StyledP>
            Became a member of{" "}
            <StyledA href="https://zjuidg.org/">
              <strong>ZJUIDG</strong>,the State Key Lab of CAD&CG
            </StyledA>{" "}
            advised by Prof.{" "}
            <StyledA href="http://www.ycwu.org">Yingcai Wu</StyledA>
            <br></br>(2019.9 - 2021.3)
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
            , published in VIS2020
          </StyledP>
          <StyledP>
            Intern at{" "}
            <StyledA href="https://www.molardata.com/">
              <strong>Molardata Tech</strong>
            </StyledA>{" "}
            (2020.11 - 2021.1)
          </StyledP>
          <StyledP>School-level Excellent League Member</StyledP>
          <StyledP>Join NextLab of Zhejiang University</StyledP>
        </TimeLineItem>
        <TimeLineItem>
          <TimeLineMark></TimeLineMark>
          <Title>2021</Title>
          <StyledP>
            Intern at{" "}
            <StyledA href="https://www.bytedance.com/">
              <strong>ByteDance</strong>
            </StyledA>{" "}
            (2021.3 - 2021.9)
          </StyledP>
          <StyledP>
            Do some security research with Prof.{" "}
            <StyledA href="https://list.zju.edu.cn/kaibu/">
              <strong>Kai Bu</strong>
            </StyledA>
          </StyledP>
          <StyledP>Tencent Scholarship</StyledP>
          <StyledP>Provincial Government Scholarship</StyledP>
          <StyledP>The Second Prize Scholarship</StyledP>
        </TimeLineItem>
        <TimeLineItem>
          <TimeLineMark></TimeLineMark>
          <Title>2022</Title>
          <StyledP>
            Intern at{" "}
            <StyledA href="https://contek.io/">
              <strong> Contek </strong>
            </StyledA>{" "}
            (2021.11 - 2022.2)
          </StyledP>
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
