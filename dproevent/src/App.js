import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './styles.css';
import logo from '../src/assets/logo.jpg'
const App = () => {
  return (
    <>
    <header>
    <div className='logo'>
    <img src={logo} alt="" height={"100px"} />
      </div>
    </header>

    <section className='page'>
      <div className='page__content'>
      
        <h1>Under construction</h1>
        <small>The countdown begins...</small>
        <FlipClockCountdown
          className='flip-clock'
          to={'2023-01-27'}
        />

       
      </div>

    
    </section>

</>


  );
};

export default App;
