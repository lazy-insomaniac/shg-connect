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
    <div classNameName="App">
    
    <body style={{ backgroundColor: '#0F2661', color: 'white' }}>
    <Header/>
    <Navbar/>
    <body style={{ backgroundColor: '#0F2661', color: 'white', margin: '0 140px' }}>
    <Block1/>
    <p style={{margin : '20px 0' , fontFamily : 'Caladea' , fontSize : '24px'}}>Categories featured</p>
    <Catalogbar/>
    <ElasticSlider/>
    <Products/>
    <div style={{ textAlign : 'center' , width: '100%', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>TESTIMONIALS</div>
    <p style={{width: '100%', textAlign : 'center' , color: 'white', fontSize: 64, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Read What Others<br/>Have To say.</p>
    <Testimonials/>
    </body>
    <Footer/>
    </body>
    </div>
  );
}

export default App;
