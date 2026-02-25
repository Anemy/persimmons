import styled from '@emotion/styled';
import { theme } from '../theme';

const FooterSection = styled.footer`
  background: ${theme.colors.background.dark};
  color: ${theme.colors.background.white};
  padding: 3rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${theme.colors.primary};
  }

  p,
  a {
    color: ${theme.colors.text.light};
    text-decoration: none;
    line-height: 2;
    display: block;
    transition: color 0.3s;
  }

  a:hover {
    color: ${theme.colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${theme.colors.border.dark};
  color: ${theme.colors.text.lighter};
`;

function Footer() {
  return (
    <FooterSection id="contact">
      <FooterContent>
        <FooterColumn>
          <h3>Persimmons</h3>
          <p>Premium dried persimmons for health-conscious snackers.</p>
        </FooterColumn>
        <FooterColumn>
          <h3>Contact</h3>
          <a href="mailto:hello@persimmons.com">hello@persimmons.com</a>
          <p>1-800-PERSIMM</p>
        </FooterColumn>
        <FooterColumn>
          <h3>Follow Us</h3>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </FooterColumn>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Persimmons. All rights reserved.
      </Copyright>
    </FooterSection>
  );
}

export default Footer;
