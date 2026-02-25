import { css, Global } from '@emotion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, sans-serif;
    color: #333;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </>
  );
}

export default App;
