import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

import queryString from 'query-string';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    
    //if( searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText }`)

  }

  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form aria-label="form" onSubmit={ onSearchSubmit }>
            <input 
              aria-label="searchText"
              type="text" 
              className="form-control" 
              name="searchText" 
              autoComplete="off" 
              placeholder="Search a hero"
              value={ searchText }
              onChange={ onInputChange } />
            <button className="btn btn-secondary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div 
            aria-label="alert-secondary"
            className="alert alert-secondary animate__animated animate__fadeIn" 
            style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>
          <div 
            aria-label="alert-danger"
            className="alert alert-danger animate__animated animate__fadeIn" 
            style={{ display: showError ? '' : 'none' }}>
            No hero with <em>{ q }</em>
          </div>
          {
            heroes.map((hero) =>  (
                <HeroCard 
                  key={ hero.id }
                  { ...hero }
                />
            ))
        }
        </div>
      </div>
    </>
  )
}
