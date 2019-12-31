import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ee4d64;

  form {
    width: 360px;
    background: #fff;
    border-radius: 4px;
    padding: 50px 30px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;

    input,
    button {
      height: 45px;
    }

    img {
      align-self: center;
      margin-bottom: 30px;
    }
  }
`;
