import React from 'react';
import { heroes } from '../../data/heros';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heros/HeroCard';


const SearchScreen = () => {

  const herosFilter = heroes;

  const [formValues, handleInputChange] = useForm({searchText: ''});

  const {searchText} = formValues;

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchText);
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
            herosFilter.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>

    </div>
  );
}

export default SearchScreen;