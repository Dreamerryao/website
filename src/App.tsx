import { FC, memo, useState } from "react";
import Welcome from "./views/Welcome";
import WowCanvas from "./views/WowCanvas";
import IconButton from "./common_components/IconButton";
import Terminal from "./views/Terminal";
import styled from "styled-components";
import { ReactComponent as TerminalIcon } from "./assets/terminal.svg";
const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = `Dreamerryao \u00A9${getYear()}\n`;
const Container = styled.div`
  width:100%;
  height:100%;
  overflow:hidden;
  position:relative;
  background-color:black;
`;

const App: FC = () => {
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  return (
    <Container >
      <WowCanvas/>
      <IconButton onClick={() => setTerminalOpen((x) => !x)}>
        <TerminalIcon />
      </IconButton>
      <Welcome message={welcomeMessage} />
      {terminalOpen && <Terminal />}
    </Container>
  );
};

export default memo(App);
