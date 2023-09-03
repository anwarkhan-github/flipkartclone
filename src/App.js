
import './App.css';
import Navbar from './components/Navbar';
import Panel1 from './components/Panel1';

import Box1 from './components/Box1';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="body w-full h-auto bg-gray-300">

    <Navbar/>
    <Panel1/>
    <Hero/>
    <Box1/>
    <Footer/>
    </div>
    
    </>
  );
}

export default App;
