import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 450px;
  div.message {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;
  }
  form {
    display: flex;
    flex-direction: column;
    img {
      margin-bottom: 50px;
    }
    div.field h1 {
      color: #3b9eff;
      text-align: center;
      margin-bottom: 50px;
    }
    div.btn {
      display: flex;
      justify-content: center;
    }
  }
`;
