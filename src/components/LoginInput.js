import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/hookInput'
import LocaleContext from '../context/LocaleContext'

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  const onLogin = () => {
    login(
      {
        email: email,
        password: password,
      })
  }

  return (
    <div className='login-input'>
      <input type="email" placeholder='Email' value={email} onChange={onEmailChange} />
      <input type="password" placeholder='Password' value={password} onChange={onPasswordChange} />
      <button onClick={onLogin}>{locale === 'id' ? 'Masuk' : 'Login'}</button>
    </div>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;