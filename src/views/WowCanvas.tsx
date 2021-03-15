import React from "react";
import styled from "styled-components";
const Canvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
`;

class WowCanvas extends React.Component {
  s: any;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.s = document.querySelector("#jsonp");
  }
  componentDidMount() {
    console.log("mount");
    this.s && this.s.parentNode!.removeChild(this.s);
    var script = document.createElement("script");
    script.id = "jsonp";
    script.src = "/script.js";
    document.body.appendChild(script);
  }
  componentWillUnmount() {
    console.log("unmount");
    this.s.parentNode!.removeChild(this.s);
    window.onkeydown = null;
    window.ontouchend = null;
    window.onmouseup = null;
  }
  render() {
    return <Canvas />;
  }
}
export default WowCanvas;
