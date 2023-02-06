import React from 'react'
import styles from './Form.module.css'
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
    <div className={styles.divForm}>
      <h1 className='text-center my-4'>Rick and Morty <span className='text-warning'>App!</span></h1>
      <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label> <input type="text" name="username" value={userData.username} onChange={handleInputChange} autocomplete="off" /><br/>
          {errors.username &&  <p style={{color: 'red'}}>{errors.username}</p>}
   
          <label htmlFor="password" >Password:</label> <input type="password" name="password" value={userData.password} onChange={handleInputChange} /><br/>
          {errors.password &&  <p style={{color: 'red'}}>{errors.password}</p>}

        <button type="submit" className='btn btn-light'>Login</button>
    </form>
    </div>
    
  )
}

export default Form
