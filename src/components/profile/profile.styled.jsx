import styled from 'styled-components';

export const Card = styled.div`
  margin: 50px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const Description = styled.div`
  text-align: center;
  width: 300px;
  padding: 30px;
`;
export const ImgProfile = styled.img`
  width: 250px;
  border-radius: 65%;
`;
export const Name = styled.p`
font-size: 24px;
  font-weight: 500;
  margin: 16px;
  color: rgb(141, 141, 141);
`;

export const ListStats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: rgb(231 233 234);
`;

export const ItemProfile = styled.li`
  text-align: center;
  padding: 20px;
  width: 100%;
`;

export const Label = styled.span`
display: block;
  color: rgb(150 141 141);
  margin-bottom: 5px;
  font-size: 24px;
  `;
export const Quntity = styled.span`
font-size: 18px;
  font-weight: 700;
  display: block;
  color:rgb(96 81 81);
  `;