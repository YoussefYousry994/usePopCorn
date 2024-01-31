import PropTypes from 'prop-types';

SearchBar.propTypes = {
  query: PropTypes.string.isrequired,
  setQuery: PropTypes.string.isRequired,
};

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
