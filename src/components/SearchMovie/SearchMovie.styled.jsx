import styled from '@emotion/styled';

export const SearchTitle = styled.h1`
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
  color: midnightblue;
`;

export const SearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
  margin-bottom: 24px;
`;

export const SearchItem = styled.li`
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;
