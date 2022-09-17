import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Notes from './components/notes/notes';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Notes />
      <Footer /> 
    </div>
  );
}

export default App;
