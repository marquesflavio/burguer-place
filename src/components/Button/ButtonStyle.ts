import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #f1f1f1;
  color: black;
  border: none;
  padding: 1rem;
  border-radius: 14px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 13.6px 9px 10px rgba(0, 0, 0, 0.025),
    109px 72px 80px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #e0e0e0;
  }
`;
