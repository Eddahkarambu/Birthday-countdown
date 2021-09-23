import React,{useRef,useState} from 'react';
import './App.css';

function App() {
  const[timerDays, setTimerDays]=useState('00');
  const[timerHours, setTimerHours]=useState('00');
  const[timerMinutes, setTimerMinutes]=useState('00');
  const[timerSeconds, setTimerSeconds]=useState('00');


  let interval=useRef();

  const startTimer =()=>{
    const countdownDate= new Date('October 10 2021 00:00:00').getTime();

    interval=setInterval(()=>{
      const now = new Date().getTime();
      const distance=countdownDate -now;


      const days= Math.floor(distance/(1000*60*60*24));
      const hours= Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
      const minutes= Math.floor((distance%(1000*60*60*24))/(1000*60));
      const seconds= Math.floor((distance%(1000*60*60*24))/1000);

    }, 1000);

  };



  return (
    <div className="App">
      <div className="Timer-container">
      <div className="Timer">
        <div>
      <h1>My 23rd Birthday</h1>
      <p>Happy Birthday to me in afew :)</p>
      </div>
      

      <div>
        <section>
          <p>17</p>
          <p><small>Days</small></p>
        </section>
        <span>:</span>

        <section>
          <p>17</p>
          <p><small>Hours</small></p>
        </section>
        <span>:</span>

        <section>
          <p>17</p>
          <p><small>Minutes</small></p>
        </section>
        <span>:</span>

        <section>
          <p>17</p>
          <p><small>Seconds</small></p>
        </section>
        

      </div>
      </div>
      </div>
    </div>

   

    
  );
}

export default App;
