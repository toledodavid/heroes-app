import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heros/HeroCard';
import { getHerosByName } from '../../selectors/getHerosByName';


const SearchScreen = ({history}) => {

  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);


  const [formValues, handleInputChange] = useForm({searchText: q});
  const {searchText} = formValues;

  const herosFiltered = useMemo(() =>  getHerosByName(q), [q]);

  const handleSearch = (event) => {
    event.preventDefault();
    history.push(`?q=${searchText}`);
  }

  return(
    <div>
      <h1>Search Hero</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr/>

          <form onSubmit={handleSearch}>
            <input type="text" name="searchText" value={searchText} onChange={handleInputChange} placeholder="Find your hero" className="form-control" autoComplete="off" />

            <button type="submit" className="btn btn-outline-primary btn-block">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {
            (q === '') &&
              <div className="alert alert-info">
                Search a hero
              </div>
          }

          {
            (q !== '' && herosFiltered.length === 0) &&
              <div className="alert alert-danger">
                There is no hero with {q}
              </div>
          }

          {
            herosFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>

    </div>
  );
}

export default SearchScreen;