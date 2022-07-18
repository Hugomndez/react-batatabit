import { Footer, Header, Main } from '../layout';
import { Exchange, Plans, Poster, ProductDetail } from '../components';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Exchange />
        <ProductDetail />
        <Poster />
        <Plans />
      </Main>
      <Footer />
    </>
  );
};

export default App;
