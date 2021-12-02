import React from 'react';
import style from './Accueil2.module.css';

import Jap from './imgApp/Jap.PNG';
import tesla from './imgApp/Tesla.PNG';
import Notfound from './imgApp/404.PNG';
import Tinder from './imgApp/Tinder.PNG';


function Accueil2() {
  return (
  <>  

<div className={style.Flexbox1}>
    <div className={style.Flexbox2}>
      <div className={style.Flexboximgdiv}><img className={style.Flexboximg} src={Jap} alt=""/></div>
      <h4 className={style.H4flexbox}>Japanese Courses Page</h4>
    </div>

    <div className={style.Flexbox2}>
    <div className={style.Flexboximgdiv}><img className={style.Flexboximg} src={tesla} alt=""/></div>
      <h4 className={style.H4flexbox}>Site Tesla</h4>
    </div>
</div>  

<div className={style.Flexbox1}>
    <div className={style.Flexbox2}>
    <div className={style.Flexboximgdiv}><img className={style.Flexboximg} src={Notfound} alt=""/></div>
      <h4 className={style.H4flexbox}>Page 404 - Dev challenge</h4>
    </div>

    <div className={style.Flexbox2}>
    <div className={style.Flexboximgdiv}><img className={style.Flexboximg} src={Tinder} alt=""/></div>
      <h4 className={style.H4flexbox}>Site tinder</h4>
    </div>
</div>
  
  </>  
  );
}

export default Accueil2;
