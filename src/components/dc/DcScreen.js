import React from 'react';
import HerosList from '../heros/HerosList';


const DcScreen = () => {
  return(
    <div>
      <h1>DC Screen</h1>
      <hr/>

      <HerosList publisher="DC Comics" />
    </div>
  );
}

export default DcScreen;