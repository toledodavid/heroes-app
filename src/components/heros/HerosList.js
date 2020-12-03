import React, { useMemo } from 'react';
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher';
import HeroCard from './HeroCard';



const HerosList = ({publisher}) => {

  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  return(
    <div className="card-columns animate__animated animate__fadeIn">
      {
        heros.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  );
}

export default HerosList;