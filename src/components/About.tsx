import styled from '@emotion/styled';
import { theme } from '../theme';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, ${theme.colors.background.lightGradient1} 0%, ${theme.colors.background.lightGradient2} 100%);
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${theme.colors.text.dark};
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.colors.text.medium};
  margin-bottom: 1.5rem;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Feature = styled.div`
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text.dark};
`;

const FeatureText = styled.p`
  color: ${theme.colors.text.medium};
  font-size: 0.95rem;
`;

function About() {
  return (
    <AboutSection id="about">
      <AboutContent>
        <SectionTitle>About Our Persimmons</SectionTitle>
        <AboutText>
          Our dried persimmons are carefully selected and naturally dried to
          preserve their rich, sweet flavor and nutritional benefits. Each
          persimmon is handpicked at peak ripeness to ensure the highest
          quality.
        </AboutText>
        <AboutText>
          Rich in vitamins, fiber, and antioxidants, our persimmons make a
          perfect healthy snack for any time of day.
        </AboutText>
        <Features>
          <Feature>
            <FeatureIcon>✨</FeatureIcon>
            <FeatureTitle>100% Natural</FeatureTitle>
            <FeatureText>No additives or preservatives</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>🌱</FeatureIcon>
            <FeatureTitle>Sustainably Grown</FeatureTitle>
            <FeatureText>Environmentally friendly practices</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>💯</FeatureIcon>
            <FeatureTitle>Premium Quality</FeatureTitle>
            <FeatureText>Handpicked and carefully dried</FeatureText>
          </Feature>
        </Features>
      </AboutContent>
    </AboutSection>
  );
}

export default About;
