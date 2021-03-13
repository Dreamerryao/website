import { FC, memo, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";

interface WelcomeProps {
  message: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const promptMessage =
  "Click to Enter my world and Double Click to use Terminal";
const WelcomeContainer = styled.div`
  color: white;
  font-size: 50px;
  margin-bottom: 16px;
  user-select: none;
  text-align: center;
  cursor: default;
  ::after {
    content: "|";
    animation: blink 1s infinite ease-in-out;
  }
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

  &.finish {
    animation: gradient 3s infinite ease-in-out;
    ::after {
      content: "";
      animation: none;
      /* animation: blink 2s infinite ease-in-out; */
    }
  }
  @keyframes gradient {
    0% {
      color: white;
    }
    50% {
      color: gray;
    }
    100% {
      color: white;
    }
  }
`;

const Prompt = styled.div`
  font-size: 30px;
  color: gray;
  text-align: center;
  cursor: default;
  user-select: none;
  visibility: hidden;
  &.show {
    visibility: visible;
    animation: fadeIn 1s ease-in;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
const Welcome: FC<WelcomeProps> = ({ message }) => {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const [finish, setFinish] = useState<boolean>(false);
  let clickId: NodeJS.Timeout;
  const handleClick = () => {
    clearTimeout(clickId);
    clickId = setTimeout(() => {
      console.log("click");
    }, 200);
  };
  const handleDblClick = () => {
    clearTimeout(clickId);
    console.log('double click');
  };
  useEffect(() => {
    let index = 0;
    setFinish(false);
    if (welcomeRef.current) welcomeRef.current.innerText = "";
    const typeText = setInterval(() => {
      welcomeRef.current?.insertAdjacentText("beforeend", message[index++]);
      if (index === message.length) {
        setFinish(true);
        clearInterval(typeText);
      }
    }, 100);
    return () => {
      setFinish(false);
      clearInterval(typeText);
    };
  }, [message]);
  return (
    <Container
      onDoubleClick={handleDblClick}
      onClick={handleClick}
    >
      <WelcomeContainer
        ref={welcomeRef}
        className={classNames({ finish: finish })}
      />
      <Prompt className={classNames({ show: finish })}>{promptMessage}</Prompt>
    </Container>
  );
};

export default memo(Welcome);
