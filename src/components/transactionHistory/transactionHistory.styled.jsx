import styled from "styled-components";

export const TransactionTable = styled.table`
  margin: 35px;
  width: 1200px;
  text-align: center;
  box-shadow: 0 7px 13px -2px rgb(75 66 66 / 76%);
  border-collapse: collapse;
  font-size:  18px;
font-weight: 500;
`;

export const TableHead = styled.thead`
 background-color: rgb(154 175 213);
  color: white;
  text-transform: uppercase;
 border: 1px solid rgb(223 220 220);

`;

export const TableHeadRow = styled.th` 
padding: 10px;
  `;

export const TableRow = styled.td`
color: grey;
  padding: 10px;
  border: 1px solid rgb(223 220 220);
  `;