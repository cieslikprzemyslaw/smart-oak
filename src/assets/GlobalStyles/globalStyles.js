import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

html{
  box-sizing: border-box;
  background-color: #333;
}

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body{
    margin: 0;
    padding: 0;
}

button{
    cursor: pointer;
    padding: 0;
}

ul{
    padding: 0;
    margin: 0;
}

`;