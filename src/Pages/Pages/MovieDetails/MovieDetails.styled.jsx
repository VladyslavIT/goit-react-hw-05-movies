import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 40px;
`;

export const InfoThumb = styled.div`
  width: 50%;
  padding-top: 20px;
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
