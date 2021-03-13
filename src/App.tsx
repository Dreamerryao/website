import  { FC, memo } from "react";
import Welcome from './views/Welcome';

const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = `Dreamerryao \u00A9${getYear()}\n`;

const App:FC = ()=> {
  return (
    <Welcome message={welcomeMessage}/>
  );
}

export default memo(App);
