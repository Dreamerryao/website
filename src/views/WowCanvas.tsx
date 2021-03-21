import React from "react";
import styled from "styled-components";
import WebglFluid from "webgl-fluid";
const Canvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

class WowCanvas extends React.Component {
  canvasRef: any;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    WebglFluid(this.canvasRef.current, {
      IMMEDIATE: false, // Whether to trigger multiple random splats when initialized
      TRIGGER: "click", // Can be change to 'click'
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 1,
      VELOCITY_DISSIPATION: 1,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.2,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: false,
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
    });
  }
  render() {
    return <Canvas ref={this.canvasRef} />;
  }
}
export default WowCanvas;
