import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/hookInput'
import LocaleContext from '../context/LocaleContext';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [verifPassword, onVerifPasswordChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  const onRegister = () => {
    if (password === verifPassword) {
      register(
        {
          name: name,
          email: email,
          password: password
        })
      alert('Berhasil Mendaftar');
    } else {
      alert('password tidak sama');
    }
  }

  return (
    <div className='register-input'>
      <input type="text" placeholder={locale === 'id' ? "Nama" : 'Name'} value={name} onChange={onNameChange} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={onPasswordChange} />
      <input type="password" placeholder={locale === 'id' ? "Tulis lagi passwordnya" : 'Confrim Password'} autoComplete='current-password' value={verifPassword} onChange={onVerifPasswordChange} />
      <button onClick={onRegister}>{locale === 'id' ? 'Daftar' : 'Register'} </button>
    </div>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
}

export default RegisterInput;