import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  text-transform: capitalize;
  padding: 5px;
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #c0bdbd;
  transition: scale 200ms cubic-bezier(0.455, 0.03, 0.515, 0.5),
    background-color 200ms cubic-bezier(0.455, 0.03, 0.515, 0.5);
  &:hover,
  &:focus {
    scale: 1.045;
  }
`;
