import styled from 'styled-components';

export const Card = styled.div`
  height: 100vh;
  width: 100vh;
  display: block;
  justifycontent: center;
  alignitems: center;
  fontsize: 40;
  color: #010101;
  background-color: milk;
  border: 5px solid grey;
  margin: 15px;
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #010101;
  padding: 25px;
`;

export const ListStats = styled.ul`
  padding: 0 2px;
  display: flex;
  wrap: wrap;
  justify-content: space-around;
  background-color: grey;
`;

export const ItemProfile = styled.li`
  display: flex;
  wrap: wrap;
  flex-direction: column;
  padding: 10px;
  //   border: 5px solid black;
`;

export const ImgProfile = styled.img`
  //   display: block;
  //   max-width: 100%;
  //   height: auto;
`;
