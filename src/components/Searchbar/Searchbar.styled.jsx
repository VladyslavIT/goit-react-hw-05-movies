import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

export const Input = styled.input`
  width: 35%;
  height: 36px;
  font-size: large;
  border: none;
  border-radius: 8px;
  outline: none;
  &::placeholder {
    font-size: medium;
  }
`;

export const Button = styled.button`
cursor: pointer;
    border-radius: 8px;
    border: none;
    margin-left: 12px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: background-color;
        background-color: cadetblue;
        color: white;
         
    }
`;
