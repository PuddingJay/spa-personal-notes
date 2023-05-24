import React from 'react';
import { LocaleConsumer } from '../context/LocaleContext';
function ToggleLocale() {

  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return <button className='lang' onClick={toggleLocale}>
          {locale === 'id' ? 'en' : 'id'}
        </button>
      }}
    </LocaleConsumer>
  )
}

export default ToggleLocale;