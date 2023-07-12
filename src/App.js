import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Block1 from './components/Block1';
import Header from './components/Header';
import Catalogbar from './components/Catalogbar';
import ElasticSlider from './components/ElasticsSider';
import Products from './components/Products';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <body style={{ width: '100%', height: '100%', margin: '0', padding: '0', overflow: 'hidden', backgroundColor: '#0F2661', color: 'white' }}>
        <Header />
        <Navbar />
        <body style={{ backgroundColor: '#0F2661', color: 'white', margin: '0 8.75rem' }}>
          <Block1 style = {{marginBottom :'2.5rem'}}/>
          <p style={{ margin: '1.25rem 0', fontFamily: 'Caladea', fontSize: '1.5rem' , display : ' flex' }}>Categories featured</p>
          <Catalogbar />
          <ElasticSlider />
          <Products />
          <div style={{ textAlign: 'center', width: '100%', color: 'white', fontSize: '1.25rem', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>TESTIMONIALS</div>
          <p style={{ width: '100%', textAlign: 'center', color: 'white', fontSize: '4rem', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>Read What Others<br />Have To say.</p>
          <Testimonials />
        </body>
        <Footer />
      </body>
    </div>
  );
}

export default App;
