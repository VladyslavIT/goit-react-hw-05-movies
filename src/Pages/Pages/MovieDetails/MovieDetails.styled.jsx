import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 40px;
  margin-bottom: 56px;
`;
export const InfoWrapper = styled.div`
  margin-left: 76px;
  display: flex;
  flex-direction: column;
`;
export const InfoThumb = styled.div`
  width: 50%;
  padding-top: 20px;
  margin-bottom: 90px;
`;

export const InfoTitle = styled.h1`
  margin-bottom: 16px;
`;

export const InfoTag = styled.p`
  margin-bottom: 24px;
  font-style: italic;
  font-size: large;
`;

export const InfoVote = styled.p`
  margin-bottom: 16px;
  font-weight: bold;
  font-size: large;
`;

export const InfoListThumb = styled.div`
  display: flex;
  margin-bottom: 24px;
  font-weight: bold;
`;

export const InfoList = styled.ul`
  display: flex;
`;

export const InfoGenres = styled.p`
  font-size: large;
  margin-right: 20px;
`;

export const InfoItem = styled.li`
  font-size: large;
  margin-right: 16px;
  &:last-child {
    margin: 0;
  }
`;

export const OwerviewTitle = styled.h3`
  text-align: center;
  margin-bottom: 24px;
`;

export const OwerviewText = styled.p`
  text-align: center;
  font-size: large;
  line-height: 24px;
  letter-spacing: 0.04em;
`;
export const MoreWrapper = styled.div`
  margin-bottom: 64px;
  text-align: center;
  font-size: large;
  line-height: 24px;
  letter-spacing: 0.04em;
`;
export const MoreTitle = styled.h3`
  margin-bottom: 24px;
`;
export const MoreLink = styled(NavLink)`
  font-size: x-large;
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


