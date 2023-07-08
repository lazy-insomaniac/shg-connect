import './App.css';
import Navbar from './components/Navbar';
import Block1 from './components/Block1';
import Header from './components/Header';
import Catalogbar from './components/Catalogbar';
import Tables  from './components/Tables';
function App() {
  return (
    <div classNameName="App">
    
    <body style={{ backgroundColor: '#0F2661', color: 'white' }}>
    <Header/>
    <Navbar/>
    <body style={{ backgroundColor: '#0F2661', color: 'white', margin: '0 140px' }}>
    <p style={{margin : '20px 0' , fontFamily : 'Caladea' , fontSize : '24px'}}>Categories featured</p>
    <Catalogbar></Catalogbar>
    <Tables></Tables>
    </body>
    </body>
    </div>
  );
}

export default App;
