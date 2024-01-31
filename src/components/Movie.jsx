import PropTypes from 'prop-types';

export default function Movie({ movie, setSelectedId }) {
  function handleSelect() {
    setSelectedId(movie.imdbID);
  }

  return (
    <li onClick={handleSelect}>
      <img src={String(movie.Poster)} alt={`${String(movie.Title)} poster`} />
      <h3>{String(movie.Title)}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{String(movie.Year)}</span>
        </p>
      </div>
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedId: PropTypes.func.isRequired,
};
