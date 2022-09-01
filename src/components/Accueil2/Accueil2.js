import React from "react";
import style from "./Accueil2.module.css";

import Jap from "./imgApp/Jap.PNG";
import tesla from "./imgApp/onrec.PNG";
import Notfound from "./imgApp/404.PNG";
import Tinder from "./imgApp/Tinder.PNG";
import airbnb from "./imgApp/Capture (2).PNG";
import mk from "./imgApp/Captaaaaaaaaaaaaaaure.PNG";
import Hexagone from './imgApp/Hexagone.PNG';
import sushi from './imgApp/Sus.PNG';
import todoapp from './imgApp/lindow-n.github.io_todoapp_.png';

function Accueil2() {
  return (
    <>
    
    <div className={style.Flexbox1}>

    <div className={style.Flexbox2}>
          <a
            href="https://lindow-n.github.io/Sushiman---Food-Landing-Pages/"
            className={style.FlexboxLink}
            target="_blank" rel="noopener noreferrer"
          >
            <div className={style.Flexboximgdiv}>
              <img className={style.Flexboximg} src={sushi} alt="" />
            </div>
            <h4 className={style.H4flexbox}>Sushiman🍣 - Food Landing Page </h4>
          </a>
        </div>

        <div className={style.Flexbox2}>
          <a
            href="https://lindow-n.github.io/todoapp/"
            className={style.FlexboxLink}
            target="_blank" rel="noopener noreferrer"
          >
            <div className={style.Flexboximgdiv}>
              <img className={style.Flexboximg} src={todoapp} alt="" />
            </div>
            <h4 className={style.H4flexbox}>Todolist App</h4>
          </a>
        </div>
    </div>
      <div className={style.Flexbox1}>

 

        <div className={style.Flexbox2}>
          <a
            href="https://lindow-n.github.io/projet-Learn-Japan/"
            className={style.FlexboxLink}
            target="_blank" rel="noopener noreferrer"
          >
            <div className={style.Flexboximgdiv}>
              <img className={style.Flexboximg} src={Jap} alt="" />
            </div>
            <h4 className={style.H4flexbox}>Japanese Courses Page</h4>
          </a>
        </div>

        <div className={style.Flexbox2}>
          <a
            href="https://lindow-n.github.io/onrecPortfolio/#/"
            className={style.FlexboxLink}
            target="_blank" rel="noopener noreferrer"
          >
            <div className={style.Flexboximgdiv}>
              <img className={style.Flexboximg} src={tesla} alt="" />
            </div>
            <h4 className={style.H4flexbox}>Site Onrec</h4>
          </a>
        </div>
      </div>

      <div className={style.Flexbox1}>
        
    <div className={style.Flexbox2}>
          <a
            href="https://lindow-n.github.io/Hexagon-/"
            className={style.FlexboxLink}
            target="_blank" rel="noopener noreferrer"
          >
            <div className={style.Flexboximgdiv}>
              <img className={style.Flexboximg} src={Hexagone} alt="" />
            </div>
            <h4 className={style.H4flexbox}>Creative Hexagon</h4>
          </a>
        </div>
        <div className={style.Flexbox2}>
          <a
            href="https://lindow-n.github.io/task2/"
            className={style.FlexboxLink}
            target="_blank" rel="noopener noreferrer"
          >
            <div className={style.Flexboximgdiv}>
              <img className={style.Flexboximg} src={mk} alt="" />
            </div>
            <h4 className={style.H4flexbox}>Markdown Convertisseur</h4>
          </a>
        </div>
      </div>

      <div className={style.Flexbox1}>
      <div className={style.Flexbox2}>
          <a
            href="https://lindow-n.github.io/tinder/"
            className={style.FlexboxLink}
            target="_blank" rel="noopener noreferrer"
          >
            <div className={style.Flexboximgdiv}>
              <img className={style.Flexboximg} src={Tinder} alt="" />
            </div>
            <h4 className={style.H4flexbox}>Site tinder</h4>
          </a>
        </div>
        <div className={style.Flexbox2}>
          <a
            href="https://Lindow-N.github.io/Page404-devChallenges.io"
            className={style.FlexboxLink}
            target="_blank" rel="noopener noreferrer"
          >
            <div className={style.Flexboximgdiv}>
              <img className={style.Flexboximg} src={Notfound} alt="" />
            </div>
            <h4 className={style.H4flexbox}>Page 404 - Dev challenge</h4>
          </a>
        </div>
      </div>
    </>
  );
}

export default Accueil2;
