import styled from "styled-components";

export const DivOrder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  align-items: center;
  justify-content: flex-start;
  background-color: #b1ae7be4;
  width: 300px;
  min-height: 400px;
  border-radius: 10px;
  &:hover {
    background-color: #FF8C00;
    cursor: pointer;
  }
`;

export const ImgBurguer = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px; 
  display: block; 
`;
