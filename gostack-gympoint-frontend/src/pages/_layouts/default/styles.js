import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
`;

export const WrapperContent = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 40px 0;

  .page-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .actions {
      display: flex;
      align-items: center;

      > * {
        margin-left: 10px;
      }
    }
  }

  .content {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
  }
`;
