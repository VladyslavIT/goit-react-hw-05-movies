import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Error = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
`;

export const ErrorLink = styled(NavLink)`
    margin: 0 10px;
`;
