import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/heros/HeroScreen';
import DcScreen from '../components/dc/DcScreen';



const DashboardRoutes = () => {
  return(
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}

export default DashboardRoutes;