import { FC, memo} from "react";
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

const App: FC = () => {
  return (
    <Container>
      <Router>
        <Tab />
        <Switch>
          <Route exact path="/">
          <Welcome message={welcomeMessage} />
            <WowCanvas/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default memo(App);
