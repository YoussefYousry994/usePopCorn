import { useState } from 'react';
import { useEffect } from 'react';
import Index from './Index';
import NavBar from './components/NavBar';
import NumResults from './components/NumResults';
import SearchBar from './components/SearchBar';
import ListBox from './components/ListBox';
import WatchedBox from './components/WatchedBox';
import MovieList from './components/MovieList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';
import SelectedMovie from './components/SelectedMovie';

export const key = '21477f2';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`
          );

          if (!res.ok) throw new Error('Something went wrong');

          const data = await res.json();
          if (data.Response === 'False') throw new Error('Movie Not Found');
          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError('');
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <NavBar movies={movies}>
        <SearchBar query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Index>
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} setSelectedId={setSelectedId} />
          )}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={setSelectedId}
            />
          ) : (
            <WatchedBox />
          )}
        </ListBox>
      </Index>
      <Footer />
    </>
  );
}
