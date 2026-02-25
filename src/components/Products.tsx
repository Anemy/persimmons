import styled from '@emotion/styled';
import { theme } from '../theme';

const ProductsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${theme.colors.text.dark};
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background: ${theme.colors.background.white};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px ${theme.colors.shadow.light};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${theme.colors.shadow.medium};
  }
`;

const ProductImage = styled.div`
  height: 250px;
  background: linear-gradient(135deg, ${theme.colors.background.lightGradient2} 0%, ${theme.colors.background.lightGradient3} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text.dark};
`;

const ProductDescription = styled.p`
  color: ${theme.colors.text.medium};
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const BuyButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.background.white};
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

const products = [
  {
    id: 1,
    name: 'Classic Dried Persimmons',
    description: 'Traditional dried persimmons with natural sweetness',
    price: '$12.99',
    emoji: '🍊',
  },
  {
    id: 2,
    name: 'Premium Gift Box',
    description: 'Elegant box of our finest dried persimmons',
    price: '$24.99',
    emoji: '🎁',
  },
  {
    id: 3,
    name: 'Organic Selection',
    description: 'Certified organic dried persimmons',
    price: '$16.99',
    emoji: '🌿',
  },
];

function Products() {
  return (
    <ProductsSection id="products">
      <SectionTitle>Our Products</SectionTitle>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>{product.emoji}</ProductImage>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>
                <Price>{product.price}</Price>
                <BuyButton>Add to Cart</BuyButton>
              </ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsSection>
  );
}

export default Products;
