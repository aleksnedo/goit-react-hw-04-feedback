import styled from '@emotion/styled';

export const Container = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Value = styled.span`
  font-size: 50px;
  font-weight: 600;
`;

export const Controls = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  width: 50px;
  height: 20px;
  background-color: gray;
  border: solid 1px transparent;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
