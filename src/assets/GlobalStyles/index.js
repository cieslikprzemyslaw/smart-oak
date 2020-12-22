import { createGlobalStyle } from 'styled-components';
import './index.css';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1 rem = 10px, 10px/16p = 62.5% */
}

body {
  font-family: 'Open Sans';
  font-size: 1.6rem ;
  background-color: #F9F7F6;
  font-weight: 300 ;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;   
  visibility: hidden;
}

h2 { 
  font-weight: 600;
}

img {
    max-width: 100%;
    height: auto;
}

video {
  width: 100%;
  height: auto;
}
`;
