import React from 'react';
import { useState } from 'react';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { fetchMovies } from 'Api/Api';

import { Form, Input, Button } from './Searchbar.styled';

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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={handleQueryChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </Form>
      {movies.length > 0 && <SearchMovie movies={movies} />}
    </>
  );
};

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export { Searchbar };
