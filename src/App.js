import React from 'react';
import './App.css';
import Nav from './component/Nav';
import Meme from './component/Meme';
function App() {


  return (
    <div className="App" >
      <main className='mainSection'>
        <Nav/>
        <section className='memeSection'>
        <Meme/>
        </section>
      </main>
    </div>
  );
}

export default App;
