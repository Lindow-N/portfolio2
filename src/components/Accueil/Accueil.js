import React from 'react';
import style from './Accueil.module.css';
import Typewriter from 'typewriter-effect';

import Accueil2 from '../Accueil2/Accueil2';

function Accueil() {
  return (
  <>  

  <div className={style.DivHeader2}>
    <h3 className={style.H3Header}>PORTFOLIO</h3>
  </div>

    <div className={style.DivHeader}>     
      <div className={style.DivHeader3}>
          
        <h1 className={style.H1Header}>ANTHONY CASARES</h1>
        <h2 className={style.H2Header}>

        <Typewriter onInit= {(typewriter) => {
          
            typewriter
            .typeString("Développeur Web – Full Stack JavaScript")
            .changeDelay(1000)
            .start();
          }}/>

        </h2>
          
      

      </div>         
    </div>

<Accueil2/>
      
  </>  
  );
}

export default Accueil;
