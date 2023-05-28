import styled from 'styled-components';

export const TransHistoryTable = styled.table`
  margin: 5px;
`;

export const TransHead = styled.thead`
  width: 100%;
  background-color: rgb(138 137 137);
`;

export const TransHeadTr = styled.tr`
  width: 100%;
`;
export const TransHeadTh = styled.th`
  width: 33.3%;
  color: white;
`;
export const TransTBody = styled.tbody``;
export const TransBodyTr = styled.tr`
  &:nth-child(even) {
    background-color: rgb(234, 234, 234);
  }
`;
export const TransBodyTd = styled.td``;
