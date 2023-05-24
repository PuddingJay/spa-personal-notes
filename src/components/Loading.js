import React from "react";
import LocaleContext from '../context/LocaleContext'

function Loading() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <p className="loading">{locale === 'id' ? 'Sebentar yeee...' : 'Please Wait...'}</p>
  )
}

export default Loading;