import styled from '@emotion/styled';
import { theme } from '../theme';

const HeroSection = styled.section`
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, ${theme.colors.background.lightGradient1} 0%, ${theme.colors.background.lightGradient2} 100%);
  text-align: center;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${theme.colors.text.medium};
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.background.white};
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px ${theme.colors.shadow.primaryGlow};
  }
`;

const PersimmonIcon = styled.div`
  margin-bottom: 2rem;
`;

const PersimmonSvg = () => (
  <svg width="140" height="280" viewBox="0 0 140 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="skinGradient" cx="0.25" cy="0.3">
        <stop offset="0%" stopColor="#FFD580"/>
        <stop offset="30%" stopColor="#FF9F47"/>
        <stop offset="65%" stopColor="#FF7030"/>
        <stop offset="100%" stopColor="#B8441A"/>
      </radialGradient>
      <radialGradient id="fleshGradient" cx="0.35" cy="0.35">
        <stop offset="0%" stopColor="#FFF8E7"/>
        <stop offset="50%" stopColor="#FFD9A3"/>
        <stop offset="100%" stopColor="#E8A75F"/>
      </radialGradient>
      <radialGradient id="crossSectionGradient" cx="0.35" cy="0.35">
        <stop offset="0%" stopColor="#FFEFD5"/>
        <stop offset="45%" stopColor="#F5C77E"/>
        <stop offset="80%" stopColor="#D9894A"/>
        <stop offset="100%" stopColor="#A86032"/>
      </radialGradient>
      <radialGradient id="calyxGradient" cx="0.4" cy="0.3">
        <stop offset="0%" stopColor="#8FB350"/>
        <stop offset="60%" stopColor="#5D7C32"/>
        <stop offset="100%" stopColor="#3D5520"/>
      </radialGradient>
      <radialGradient id="highlightGradient" cx="0.3" cy="0.2">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7"/>
        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/>
      </radialGradient>
      <filter id="shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
        <feOffset dx="1" dy="2" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <clipPath id="topClip">
        <path d="M 28 50 Q 28 28 46 16 Q 58 10 70 9 Q 82 10 94 16 Q 112 28 112 50 Q 112 62 110 68 L 30 68 Q 28 62 28 50 Z"/>
      </clipPath>
      <clipPath id="bottomClip">
        <path d="M 30 212 L 28 230 Q 28 252 46 264 Q 58 270 70 271 Q 82 270 94 264 Q 112 252 112 230 L 110 212 Z"/>
      </clipPath>
    </defs>
    
    <g id="top-half-persimmon" filter="url(#shadow)">
      <path d="M 28 50 Q 28 28 46 16 Q 58 10 70 9 Q 82 10 94 16 Q 112 28 112 50 Q 112 62 110 68 L 30 68 Q 28 62 28 50 Z" 
            fill="url(#skinGradient)"/>
      <path d="M 28 50 Q 28 28 46 16 Q 58 10 70 9 Q 82 10 94 16 Q 112 28 112 50 Q 112 62 110 68 L 30 68 Q 28 62 28 50 Z" 
            fill="#C85525" opacity="0.15"/>
      <g clipPath="url(#topClip)">
        <ellipse cx="56" cy="35" rx="18" ry="15" fill="url(#highlightGradient)"/>
        <ellipse cx="70" cy="50" rx="40" ry="19" fill="url(#fleshGradient)"/>
        <ellipse cx="64" cy="46" rx="28" ry="13" fill="#FFF8E7" opacity="0.5"/>
        <ellipse cx="77" cy="53" rx="18" ry="9" fill="#E8A75F" opacity="0.4"/>
        <path d="M 31 68 L 31 48 Q 31 30 47 19" stroke="#B8441A" strokeWidth="1.2" opacity="0.7" fill="none"/>
        <path d="M 109 68 L 109 48 Q 109 30 93 19" stroke="#B8441A" strokeWidth="1.2" opacity="0.7" fill="none"/>
        <path d="M 45 25 Q 55 30 58 40" stroke="#D96030" strokeWidth="0.8" opacity="0.4" fill="none"/>
        <path d="M 95 25 Q 85 30 82 40" stroke="#D96030" strokeWidth="0.8" opacity="0.4" fill="none"/>
        <ellipse cx="58" cy="48" rx="3.5" ry="6" fill="#8B4513" opacity="0.8"/>
        <ellipse cx="82" cy="52" rx="3.5" ry="6" fill="#8B4513" opacity="0.8"/>
        <ellipse cx="70" cy="56" rx="3" ry="5" fill="#8B4513" opacity="0.8"/>
      </g>
      <g id="top-calyx">
        <ellipse cx="70" cy="14" rx="18" ry="8" fill="url(#calyxGradient)"/>
        <ellipse cx="66" cy="12" rx="10" ry="4" fill="#A8D060" opacity="0.4"/>
        <path d="M 52 14 Q 52 6 58 8 Q 60 10 60 14" fill="#6B8A38" stroke="#3D5520" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 60 14 Q 62 6 68 8 Q 70 10 70 14" fill="#7A9744" stroke="#3D5520" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 70 14 Q 72 6 78 8 Q 80 10 80 14" fill="#7A9744" stroke="#3D5520" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 80 14 Q 82 6 88 8 Q 88 10 88 14" fill="#6B8A38" stroke="#3D5520" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 55 12 Q 57 10 59 12" stroke="#4D6528" strokeWidth="1" opacity="0.6" fill="none"/>
        <path d="M 81 12 Q 83 10 85 12" stroke="#4D6528" strokeWidth="1" opacity="0.6" fill="none"/>
      </g>
    </g>
    
    <g id="middle-cross-section" filter="url(#shadow)">
      <circle cx="70" cy="140" r="48" fill="url(#crossSectionGradient)"/>
      <circle cx="70" cy="140" r="45" fill="#E6B575" opacity="0.6"/>
      <ellipse cx="58" cy="130" rx="24" ry="18" fill="url(#highlightGradient)"/>
      <path d="M 70 95 L 74 115 L 87 124 L 80 140 L 88 155 L 72 149 L 70 165 L 68 149 L 52 155 L 60 140 L 53 124 L 66 115 Z" 
            fill="#9B6838" opacity="0.7"/>
      <path d="M 70 95 L 74 115 L 87 124 L 80 140 L 88 155 L 72 149 L 70 165 L 68 149 L 52 155 L 60 140 L 53 124 L 66 115 Z" 
            fill="#634020" opacity="0.3"/>
      <circle cx="70" cy="140" r="10" fill="#5A3318"/>
      <ellipse cx="70" cy="138" rx="4" ry="2.5" fill="#3D2110" opacity="0.9"/>
      <circle cx="70" cy="108" r="5" fill="#6B4020" opacity="0.8"/>
      <ellipse cx="70" cy="108" rx="2" ry="3" fill="#3D2110" opacity="0.6"/>
      <circle cx="70" cy="172" r="5" fill="#6B4020" opacity="0.8"/>
      <ellipse cx="70" cy="172" rx="2" ry="3" fill="#3D2110" opacity="0.6"/>
      <circle cx="46" cy="140" r="5" fill="#6B4020" opacity="0.8"/>
      <ellipse cx="46" cy="140" rx="3" ry="2" fill="#3D2110" opacity="0.6"/>
      <circle cx="94" cy="140" r="5" fill="#6B4020" opacity="0.8"/>
      <ellipse cx="94" cy="140" rx="3" ry="2" fill="#3D2110" opacity="0.6"/>
      <circle cx="55" cy="118" r="4" fill="#6B4020" opacity="0.7"/>
      <circle cx="85" cy="118" r="4" fill="#6B4020" opacity="0.7"/>
      <circle cx="55" cy="162" r="4" fill="#6B4020" opacity="0.7"/>
      <circle cx="85" cy="162" r="4" fill="#6B4020" opacity="0.7"/>
      <path d="M 70 100 Q 73 115 70 130 M 70 150 Q 67 165 70 180" 
            stroke="#8B5930" strokeWidth="1.2" opacity="0.4" fill="none"/>
      <path d="M 50 140 Q 60 138 70 140 Q 80 142 90 140" 
            stroke="#8B5930" strokeWidth="1.2" opacity="0.4" fill="none"/>
    </g>
    
    <g id="bottom-half-persimmon" filter="url(#shadow)">
      <path d="M 30 212 L 28 230 Q 28 252 46 264 Q 58 270 70 271 Q 82 270 94 264 Q 112 252 112 230 L 110 212 Z" 
            fill="url(#skinGradient)"/>
      <path d="M 30 212 L 28 230 Q 28 252 46 264 Q 58 270 70 271 Q 82 270 94 264 Q 112 252 112 230 L 110 212 Z" 
            fill="#C85525" opacity="0.15"/>
      <g clipPath="url(#bottomClip)">
        <ellipse cx="56" cy="245" rx="18" ry="15" fill="url(#highlightGradient)"/>
        <ellipse cx="70" cy="230" rx="40" ry="19" fill="url(#fleshGradient)"/>
        <ellipse cx="64" cy="226" rx="28" ry="13" fill="#FFF8E7" opacity="0.5"/>
        <ellipse cx="77" cy="233" rx="18" ry="9" fill="#E8A75F" opacity="0.4"/>
        <path d="M 31 212 L 31 232 Q 31 250 47 261" stroke="#B8441A" strokeWidth="1.2" opacity="0.7" fill="none"/>
        <path d="M 109 212 L 109 232 Q 109 250 93 261" stroke="#B8441A" strokeWidth="1.2" opacity="0.7" fill="none"/>
        <path d="M 45 255 Q 55 250 58 240" stroke="#D96030" strokeWidth="0.8" opacity="0.4" fill="none"/>
        <path d="M 95 255 Q 85 250 82 240" stroke="#D96030" strokeWidth="0.8" opacity="0.4" fill="none"/>
        <ellipse cx="58" cy="228" rx="3.5" ry="6" fill="#8B4513" opacity="0.8"/>
        <ellipse cx="82" cy="232" rx="3.5" ry="6" fill="#8B4513" opacity="0.8"/>
        <ellipse cx="70" cy="224" rx="3" ry="5" fill="#8B4513" opacity="0.8"/>
      </g>
      <g id="bottom-calyx">
        <ellipse cx="70" cy="266" rx="18" ry="8" fill="url(#calyxGradient)"/>
        <ellipse cx="66" cy="268" rx="10" ry="4" fill="#A8D060" opacity="0.4"/>
        <path d="M 52 266 Q 52 274 58 272 Q 60 270 60 266" fill="#6B8A38" stroke="#3D5520" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 60 266 Q 62 274 68 272 Q 70 270 70 266" fill="#7A9744" stroke="#3D5520" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 70 266 Q 72 274 78 272 Q 80 270 80 266" fill="#7A9744" stroke="#3D5520" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 80 266 Q 82 274 88 272 Q 88 270 88 266" fill="#6B8A38" stroke="#3D5520" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M 55 268 Q 57 270 59 268" stroke="#4D6528" strokeWidth="1" opacity="0.6" fill="none"/>
        <path d="M 81 268 Q 83 270 85 268" stroke="#4D6528" strokeWidth="1" opacity="0.6" fill="none"/>
      </g>
    </g>
  </svg>
);

function Hero() {
  return (
    <HeroSection id="home">
      <PersimmonIcon>
        <PersimmonSvg />
      </PersimmonIcon>
      <HeroTitle>Premium Dried Persimmons</HeroTitle>
      <HeroSubtitle>
        Naturally sweet, nutritious, and absolutely delicious
      </HeroSubtitle>
      <CTAButton href="#products">Shop Now</CTAButton>
    </HeroSection>
  );
}

export default Hero;
