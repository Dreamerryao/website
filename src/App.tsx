import { FC, memo } from "react";
import Welcome from "./views/Welcome";
import NotMatch from "./views/NotMatch";
import WowCanvas from "./views/WowCanvas";
import About from "./views/About";
import styled from "styled-components";
import Tab from "./components/Tab";
import MyTwenties from "./views/MyTwenties";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = `Dreamerryao \u00A9${getYear()}\n`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BeiAn = styled.div`
  text-decoration:none;
  position:fixed;
  width:100%;
  text-align:center;
  height:40px;
  z-index:99;
  bottom:0;
  color: #939393;
  display: flex;
  justify-content: center;
  font-family: GenJyuuGothicX-Monospace-Heavy, Comic Sans MS;
`;
const StyledA = styled.a`
  text-decoration:none;
  color: #939393;
  mix-blend-mode: difference;
  margin-right:10px;
`;
const StyledBeian = styled.div`
  background-image:url(/assets/ba.png);
  background-position: center;
  background-size: cover;
  mix-blend-mode:none;
  height:20px;
  width:20px;
`;
const App: FC = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Tab />
            <Welcome message={welcomeMessage} />
            <WowCanvas />
          </Route>
          <Route path="/about">
            <Tab />
            <About />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
          <Route path="/twenty">
            <MyTwenties />
          </Route>
        </Switch>
      </Router>
      <BeiAn >
        <StyledA href="https://beian.miit.gov.cn/">浙ICP备2021009034号</StyledA>
        <StyledBeian />
        <StyledA target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602011693" >
          浙公网安备 33010602011693号</StyledA>
      </BeiAn>
    </Container>
  );
};

export default memo(App);
