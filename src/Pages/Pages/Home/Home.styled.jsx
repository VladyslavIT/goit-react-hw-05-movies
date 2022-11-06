import styled from '@emotion/styled';

export const Title = styled.h1`
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
  color: midnightblue;
`;

export const TrendList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
  margin-bottom: 24px;
`;

export const TrendItem = styled.li`
  &:hover {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05) rotateX(0deg) translateZ(25px);
  }
`;
