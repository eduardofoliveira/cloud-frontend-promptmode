import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
`;
