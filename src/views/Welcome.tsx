import { FC, memo, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";

interface WelcomeProps {
  message: string;
}

const Container = styled.div`
  pointer-events: none;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;
  /* background-color: black; */
  /* background-color: transparent; */
`;

const promptMessage = "A front-end enthusiast";
const WelcomeContainer = styled.div`
  color: white;
  /* font-family:Georgia; */
  font-family: Chalkduster, Comic Sans MS;
  font-weight: 800;
  font-size: 3rem;
  margin-bottom: 2rem;
  mix-blend-mode: difference;
  max-width: calc(100% - 2rem);
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
  max-width: calc(100% - 3rem);
  font-size: 2rem;
  font-family: Luminari, Comic Sans MS;
  color: lightgray;
  mix-blend-mode: difference;
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

  // useEffect(() => {
  //   window.addEventListener("keydown", (e) => {
  //     if (e.code === "Enter") {
  //       console.log("hello");
  //     }
  //   });
  // }, []);
  return (
    <Container>
      <WelcomeContainer
        ref={welcomeRef}
        className={classNames({ finish: finish })}
      />
      <Prompt className={classNames({ show: finish })}>{promptMessage}</Prompt>
    </Container>
  );
};

export default memo(Welcome);
