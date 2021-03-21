import React, { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: #f0bf81;
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;
`;
const StyledInputArea = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
`;
const StyledP = styled.p`
  margin-right: 5px;
`;
type InputAreaProps = {
  promptLoc: string;
  promptMessage: string;
  setOutput: React.Dispatch<React.SetStateAction<(string | JSX.Element)[]>>;
  processCommand: (input: string) => void;
  getHistory: (direction: "up" | "down") => string;
  getAutocomplete: (input: string) => string;
  inputRef: React.RefObject<HTMLInputElement>;
};
const InputArea = (props: InputAreaProps) => {
  const [input, setInput] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.charAt(inputValue.length - 1) === ".") {
      setInput(
        props.getAutocomplete(inputValue.substring(0, inputValue.length - 1))
      );
    } else setInput(inputValue);
  };
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Enter":
        props.processCommand(input);
        setInput("");
        break;
      case "ArrowUp":
        event.preventDefault();
        setInput(props.getHistory("up"));
        break;
      case "ArrowDown":
        event.preventDefault();
        setInput(props.getHistory("down"));
        break;
      case "Tab":
        // Provide autocomplete on tab. For mobile, we have to handle autocomplete in the input's onChange event.
        event.preventDefault();
        setInput(props.getAutocomplete(input));
        break;
    }
  };
  return (
    <StyledInputArea >
      <StyledP style={{ color: "lightgreen" }}>{props.promptLoc}</StyledP>
        <StyledP style={{ color: "#81dff0" }}>{props.promptMessage}</StyledP>
      <Input
        type="text"
        name="input"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        ref={props.inputRef}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
      />
    </StyledInputArea>
  );
};

export default InputArea;
