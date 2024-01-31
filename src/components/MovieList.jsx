import Movie from './Movie';
import PropTypes from 'prop-types';

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};

export default function MovieList({ movies, setSelectedId }) {
  return (
    <ul className='list list-movies'>
      {Array.isArray(movies) &&
        movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            setSelectedId={setSelectedId}
          />
        ))}
    </ul>
  );
}

// V1
// {movies?.map((movie) => (
//   <Movie movie={movie} key={movie.imdbID} />
// ))}
