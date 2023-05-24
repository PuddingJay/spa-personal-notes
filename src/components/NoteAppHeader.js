import React from 'react';
import Navigation from './Navigation';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext'


function NoteAppHeader({ logout, name }) {
    const { locale } = React.useContext(LocaleContext);

    return (
        <div className='note-app__header'>
            <h1>{locale === 'id' ? 'CATATMENCATATAPK' : 'TAKINGNOTESAPK'}</h1>
            <Navigation logout={logout} name={name} />

        </div>
    )
}

NoteAppHeader.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default NoteAppHeader;