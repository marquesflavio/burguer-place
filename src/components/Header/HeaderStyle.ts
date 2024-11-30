import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #D4AF37;
  `;
  
  export const Logo = styled.img`
  mix-blend-mode: multiply;
  width: 6rem;
  height: 6rem;
`;

export const DivNavButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivNavIcon = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

export const AppMain = styled.main`
  background-color: #dbdbc3;
  height: 100vh;
   background-image: url("./src/assets/wallpaper.png");
  background-size: cover;
  background-position: bottom;
`;