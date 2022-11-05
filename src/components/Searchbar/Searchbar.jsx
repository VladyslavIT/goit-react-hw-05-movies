import React from 'react';
import { useState } from 'react';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { fetchMovies } from 'Api/Api';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleQueryChange = event => {
    const { value } = event.currentTarget;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query === '') {
      return;
    }

    fetchMovies(query).then(response => setMovies(response));
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="query"
          value={query}
          onChange={handleQueryChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
      {movies.length > 0 && <SearchMovie movies={movies} />}
    </>
  );
};

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export { Searchbar };
