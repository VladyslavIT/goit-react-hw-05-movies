import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { fetchMovies } from 'Api/Api';
import { toast } from 'react-toastify';

import { Loader } from 'components/Loader/Loader';
import { Form, Input, Button } from './Searchbar.styled';

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (filterParams.trim() === '') {
      setMovies([]);
    }
  }, [filterParams]);


// Делает запрос, когда пользователь переш по ссылке на фильм
  // useEffect(() => {
  //   if (filterParams) {
  //     setLoading(true);
  //     fetchMovies(filterParams).then(response => {
  //       if (response.length === 0) {
  //         toast.error('Please enter another movie title');
  //         setLoading(false);
  //         return;
  //       }
  //       setMovies(response);
  //       setLoading(false);
  //     });
  //   }
  // }, []);

  const handleQueryChange = event => {
    const { value } = event.currentTarget;
    setQuery(value.toLowerCase());
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query === '') {
      toast.error('Please enter a movie title');
      return;
    }
    setLoading(true);
    fetchMovies(query).then(response => {
      if (response.length === 0) {
        toast.error('Please enter another movie title');
        setLoading(false);
        return;
      }
      setMovies(response);
      setLoading(false);
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={filterParams}
          onChange={handleQueryChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </Form>
      {loading && <Loader />}
      {movies.length > 0 && <SearchMovie movies={movies} />}
    </>
  );
};

export { Searchbar };
