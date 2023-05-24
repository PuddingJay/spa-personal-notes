import React from "react";
import { useNavigate } from "react-router-dom";
import { FiDelete } from 'react-icons/fi'
import LocaleContext from '../context/LocaleContext'

function PageNotFound() {
    const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext);

    return (
        <div className="page-not-found__card">
            <h1>404</h1>
            <h2>{locale === 'id' ? 'Halaman Tidak Ditemukan' : 'Page Not Found'}</h2>
            <button onClick={() => navigate(-1)}> <FiDelete /> {locale === 'id' ? 'Kembali' : 'BACK'} </button>
        </div>
    )
}

export default PageNotFound;