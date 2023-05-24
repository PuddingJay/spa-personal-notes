import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext'

function SearchBar({ searchText, keywordChange }) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div className='note-search'>
      <input
        type='text'
        placeholder={locale === 'id' ? 'Cari Apani... (berdasarkan judul)' : 'Whacca looking for sir (accordoing to title)'}
        value={searchText}
        onChange={(event) => keywordChange(event.target.value)}>
      </input>
    </div>
  )
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}

export default SearchBar