import styled from 'styled-components';

export const TableTd = styled.td`
  padding: 15px 0;
  font-size: 18px;
`;

export const TableTr = styled.tr`
  text-align: center;

  &:nth-child(even) {
    background-color: gray;
  }

  margin-bottom: 10px;
`;
