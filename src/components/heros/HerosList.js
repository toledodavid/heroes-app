import React from 'react';
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher';



const HerosList = ({publisher}) => {

  const heros = getHerosByPublisher(publisher);

  return(
    <ul>
      {
        heros.map(hero => (
          <li key={hero.id}>{hero.superhero}</li>
        ))
      }
    </ul>
  );
}

export default HerosList;