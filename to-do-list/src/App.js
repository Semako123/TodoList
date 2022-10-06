import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Body from './components/body/body';
import './App.css';
import './components/fonts/stylesheet.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Body />
      <Footer /> 
    </div>
  );
}

export default App;
