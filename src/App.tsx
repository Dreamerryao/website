import { FC, memo, useState } from "react";
import Welcome from "./views/Welcome";
import IconButton from "./common_components/IconButton";
import Terminal from "./views/Terminal";
import { ReactComponent as TerminalIcon } from "./assets/terminal.svg";
const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = `Dreamerryao \u00A9${getYear()}\n`;

const App: FC = () => {
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  return (
    <>
      <Welcome message={welcomeMessage} />
      <IconButton onClick={() => setTerminalOpen((x) => !x)}>
        <TerminalIcon />
      </IconButton>
      {terminalOpen && <Terminal />}
    </>
  );
};

export default memo(App);
