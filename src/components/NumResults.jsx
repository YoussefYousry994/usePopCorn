import PropTypes from 'prop-types';

NumResults.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default function NumResults({ movies }) {
  return (
    <p className='num-results'>
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
