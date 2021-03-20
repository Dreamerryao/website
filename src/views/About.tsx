import React, { memo, FC } from "react";
import styled from "styled-components";
import MoveInWidthwise from '../common_components/MoveInWidthwise';
import SelfIntro from "../components/SelfIntro";


const About: FC = () => {
  return <div>
    <MoveInWidthwise displayed={(<SelfIntro/>)}/>
  </div>;
};
export default memo(About);
