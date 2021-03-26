import { FC, memo } from "react";
import Welcome from "./views/Welcome";
import NotMatch from "./views/NotMatch";
import WowCanvas from "./views/WowCanvas";
import About from "./views/About";
import styled from "styled-components";
import Tab from "./components/Tab";

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

const BeiAn = styled.a`
  text-decoration:none;
  position:fixed;
  width:100%;
  text-align:center;
  height:40px;
  z-index:99;
  bottom:0;
  color: white;
  mix-blend-mode: difference;
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
        </Switch>
      </Router>
      <BeiAn href="https://beian.miit.gov.cn/">浙ICP备2021009034号</BeiAn>
    </Container>
  );
};

export default memo(App);
