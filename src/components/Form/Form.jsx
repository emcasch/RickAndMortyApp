import React from 'react'
import validation from './validation'

const Form = ({ login }) => {

  const [userData, setUserData] = React.useState({ username: '', password: '' });
  const [errors, setErrors] = React.useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value
      })
    )
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" value={userData.username} onChange={handleInputChange} autocomplete="off" /><br/>
        {errors.username &&  <p style={{color: 'red'}}>{errors.username}</p>}

        <label htmlFor="password" >Password: </label>
        <input type="password" name="password" value={userData.password} onChange={handleInputChange} /><br/>
        {errors.password &&  <p style={{color: 'red'}}>{errors.password}</p>}

        <button type="submit">Login</button>
    </form>
  )
}

export default Form
