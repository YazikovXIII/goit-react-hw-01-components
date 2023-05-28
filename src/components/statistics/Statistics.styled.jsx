import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 20px;
  color: rgb(120, 120, 120);
  margin-left: auto;
  margin-right: auto;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  border: 1px solid white;

  &:first-child {
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-bottom-right-radius: 5px;
  }
`;
