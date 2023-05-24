import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext'

function RegisterPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <div className="register-page">
      <RegisterInput register={onRegisterHandler} />
      <p>{locale === 'id' ? 'Kembali ke' : 'Back to'} <Link to="/">{locale === 'id' ? 'Masuk gan sikat' : 'Login'}</Link></p>
    </div>
  )
}

export default RegisterPage;