import styled from '@emotion/styled';
import { theme } from '../theme';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${theme.colors.background.whiteAlpha};
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px ${theme.colors.shadow.light};
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${theme.colors.text.dark};
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>🍂 Persimmons</Logo>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
