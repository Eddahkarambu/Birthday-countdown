import React,{ useEffect,useRef,useState} from 'react';
import './App.css';

function App() {
  const[timerDays, setTimerDays]=useState('00');
  const[timerHours, setTimerHours]=useState('00');
  const[timerMinutes, setTimerMinutes]=useState('00');
  const[timerSeconds, setTimerSeconds]=useState('00');


  let interval=useRef();

  const startTimer =()=>{
    const countdownDate= new Date('October 10 2022 00:00:00').getTime();

    interval=setInterval(()=>{
      const now = new Date().getTime();
      const distance=countdownDate - now;


      const days= Math.floor(distance/(1000*60*60*24));
      const hours= Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
      const minutes= Math.floor((distance%(1000*60*60))/(1000*60));
      const seconds= Math.floor((distance%(1000*60))/1000);

      if (distance < 0){
        // stop timer
        clearInterval(interval.current);

      }else{
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);

  };
      //  componentDidMount
      useEffect(()=>{
        startTimer();
        return()=>{
          clearInterval(interval.current);
  
        };
  
      });

  return (
    <div className="App">
      <div className="Timer-container">
      <div className="Timer">
        
        <div className="year">
      <h1>Happy 24rd Birthday Eddah</h1>
      <p>Happy Birthday to me in afew :)</p>
      </div>
      
     
      

      <div>
        <section>
          <p>{timerDays}</p>
          <p><small className="big">Days</small></p>
        </section>
        <span>:</span>

        <section>
          <p>{timerHours}</p>
          <p><small className="big">Hours</small></p>
        </section>
        <span>:</span>

        <section>
          <p>{timerMinutes}</p>
          <p><small className="big">Minutes</small></p>
        </section>
        <span>:</span>

        <section>
          <p>{timerSeconds}</p>
          <p><small className="big">Seconds</small></p>
        </section>
        

      </div>
      </div>
      </div>
    </div>

   

    
  );
}

export default App;
