import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid black;
  height: 30px;
  padding-top: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 40px;
`;

export const StyledLinkHead = styled(NavLink)`
  font-size: larger;
  font-weight: 600;
  padding: 14px;
  text-decoration: none;
  color: inherit;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
     transform: color;
    color: white;
  }
  & + & {
    margin-left: 50px;
  }
  &.active {
    color: white;
  }
`;

export const SelfThumb = styled.div`
display: flex;
`;

export const GitLink = styled.a`
text-decoration: none;
  color: inherit;
`;
export const Border = styled.div`
  margin: 0 8px;
`;
