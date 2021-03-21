import { memo, FC, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TerminalOutput from "../components/TerminalOutput";
import InputArea from "../components/InputArea";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: calc(100% - 4rem);
  width: calc(100% - 4rem);
  background-color: #000;
  overflow-x: hidden;
  overflow-y: auto;
  color: #aaa;
  font-family: 'monaco', Consola;
  padding: 2rem;
  outline: none;
  /* cursor: text; */
`;
const WelcomePrompt = styled.div`
  font-weight: 600;
  white-space: pre-wrap;
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 10px;
`;
const StyledP = styled.p`
  margin-right: 5px;
`;
const StyledA = styled.a`
  text-decoration: underline;
  color: inherit;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const promptLoc = "～";
const promptMessage = ">>";

const welcomeMessage =
  "Wow, welcome to my 404 Page! And please type 'help' to view a list of available commands.";

const echoCommands = ["help", "about", "contact", "home"] as const;
type EchoCommand = typeof echoCommands[number];
const utilityCommands = ["clear"] as const;
type UtilityCommand = typeof utilityCommands[number];
const allCommands = [...echoCommands, ...utilityCommands] as const;
type Command = typeof allCommands[number];

function isEchoCommand(arg: string): arg is EchoCommand {
  return (echoCommands as ReadonlyArray<string>).includes(arg);
}

function isUtilityCommand(arg: string): arg is UtilityCommand {
  return (utilityCommands as ReadonlyArray<string>).includes(arg);
}

function isValidCommand(arg: string): arg is Command {
  return isEchoCommand(arg) || isUtilityCommand(arg);
}
const NotMatch: FC = () => {
  const [output, setOutput] = useState<(string | JSX.Element)[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(3);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLastCommandTop = () => {
    scrollRef.current?.scrollIntoView();
  };

  useEffect(scrollLastCommandTop, [output]);

  const commands: { [key in EchoCommand]: JSX.Element } = {
    help: (
      <div>
        <p>Here is the list of available commands:</p>
        <p>help about contact home clear</p>
      </div>
    ),
    about: <StyledLink to="/about">Click here</StyledLink>,
    contact: (
      <div>
        <p>
          GitHub: <StyledA>Dreamerryao</StyledA>
        </p>
        <p>Email: zuobinwang3@gmail.com</p>
        <p>QQ: 244791255</p>
      </div>
    ),
    home: <StyledLink to="/">Click here</StyledLink>,
  };
  const processCommand = (input: string) => {
    // Store a record of this command with a ref to allow us to scroll it into view.
    // Note: We use a ref callback here because setting the ref directly, then clearing output seems to set the ref to null.
    const commandRecord = (
      <div
        ref={(el) => (scrollRef.current = el)}
        style={{ display: "inline-flex", scrollMargin: "15px" }}
      >
        <StyledP style={{ color: "lightgreen" }}>{promptLoc}</StyledP>
        <StyledP style={{ color: "#81dff0" }}>{promptMessage}</StyledP>
        <StyledP>{input}</StyledP>
      </div>
    );

    // Add command to to history if the command is not empty
    if (input.trim()) {
      setHistory([...history, input]);
      setHistoryIndex(history.length + 1);
    }

    // Now process command, ignoring case
    const inputCommand = input.toLowerCase();
    if (!isValidCommand(inputCommand)) {
      setOutput([
        ...output,
        commandRecord,
        <div>
          <StyledP style={{ color: "#f08181" }}>
            {`'${inputCommand}' is not found.`}
          </StyledP>
        </div>,
      ]);
    } else if (isEchoCommand(inputCommand)) {
      setOutput([
        ...output,
        commandRecord,
        <div>{commands[inputCommand]}</div>,
      ]);
    } else if (isUtilityCommand(inputCommand)) {
      switch (inputCommand) {
        case "clear": {
          setOutput([]);
          break;
        }
      }
    }
  };

  const focusOnInput = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab") {
      // Prevent tab from moving focus
      event.preventDefault();
    }
    inputRef.current?.focus();
  };

  const getAutocomplete = (input: string) => {
    const matchingCommands = allCommands.filter((c) => c.startsWith(input));
    if (matchingCommands.length === 1) {
      return matchingCommands[0];
    } else {
      const commandRecord = (
        <div
          ref={(el) => (scrollRef.current = el)}
          style={{ display: "inline-flex", scrollMargin: "15px" }}
        >
          <StyledP style={{ color: "lightgreen" }}>{promptLoc}</StyledP>
          <StyledP style={{ color: "#81dff0" }}>{promptMessage}</StyledP>
          <StyledP>{input}</StyledP>
        </div>
      );
      setOutput([...output, commandRecord, matchingCommands.join("    ")]);
      return input;
    }
  };

  const getHistory = (direction: "up" | "down") => {
    let updatedIndex;
    if (direction === "up") {
      updatedIndex = historyIndex === 0 ? 0 : historyIndex - 1;
    } else {
      updatedIndex =
        historyIndex === history.length ? history.length : historyIndex + 1;
    }
    setHistoryIndex(updatedIndex);
    return updatedIndex === history.length ? "" : history[updatedIndex];
  };
  return (
    <Container tabIndex={-1} onKeyDown={focusOnInput}>
      <WelcomePrompt>{welcomeMessage}</WelcomePrompt>
      <TerminalOutput outputs={output} />
      <InputArea
        setOutput={setOutput}
        processCommand={processCommand}
        getHistory={getHistory}
        getAutocomplete={getAutocomplete}
        inputRef={inputRef}
        promptLoc={promptLoc}
        promptMessage={promptMessage}
      />
    </Container>
  );
};
export default memo(NotMatch);
