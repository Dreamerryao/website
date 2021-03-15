import React, { memo, useEffect, useImperativeHandle, useRef, useState } from "react";
import type { FC } from "react";
import styled from "styled-components";
import _ from 'lodash';
const Container = styled.div`
  width: 480px;
  height: 320px;
  position: absolute;
  top:calc(50% - 160px);
  left: calc(50% - 240px);
  z-index: 2;
  background-color: white;
  border-radius: 6px;
  animation: fadeIn 0.5s cubic-bezier(0,0, .6,1);
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.1, 0.3);
      top: calc(100% - 68px);
      left: calc(100% - 62px);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
      top: calc(50% - 160px);
      left: calc(50% - 240px);
    }
  }
`;
const Title = styled.div`
  border-radius: 6px 6px 0 0;
  height: 20px;
  width: 100%;
  :focus {
    background-color: darkgray;
  }
  background-color: lightgray;
  display: flex;
`;
interface ButtonProps {
  color: string;
}
const Button = styled.div<ButtonProps>`
  background-color: ${(props) => props.color};
  margin: 3px 0px 3px 10px;
  height: 14px;
  width: 14px;
  border-radius: 7px;
`;

const Terminal: FC = () => {
  const TerminalRef = useRef<HTMLDivElement>(null);
  const x = React.useRef({
    dragging:false,
    diffX:0,
    diffY:0
  })
  const handleMouseOver = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if(x.current.dragging){
      let nowX = e.clientX - x.current.diffX;
      let nowY = e.clientY - x.current.diffY;
      if(nowX<0) nowX = 0;
      if(nowY<0) nowY = 0;
      TerminalRef.current!.style.top = nowY+'px';
      TerminalRef.current!.style.left = nowX+'px';
    }
    
  };
  const handleMouseUp = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    x.current.diffX = 0;
    x.current.diffY = 0;
    x.current.dragging = false;
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove",handleMouseOver)
  };

  
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let dX = e.clientX - (TerminalRef.current?.offsetLeft ?? 0);
    let dY= e.clientY - (TerminalRef.current?.offsetTop ?? 0);
    x.current.diffX = dX;
    x.current.diffY = dY;
    x.current.dragging = true;
    document.addEventListener("mousemove", handleMouseOver);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <Container ref={TerminalRef} >
      <Title onMouseDown={handleMouseDown}>
        <Button color="red" >✖️</Button>
        <Button color="green">✅</Button>
      </Title>
    </Container>
  );
};
export default memo(Terminal);
