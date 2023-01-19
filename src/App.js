import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';
import Form from './components/Form/Form';

function App () {
  const [characters, setCharacters] = useState([]);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const username = "emanuel.casch@gmail.com"
  const password = "tata123"

  const login = (userData) => {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      navigate("/home")
    }
  }

  useEffect(()=>{
    !access && navigate("/")
  }, [access])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      { location !== "/" && <Nav onSearch={onSearch} /> }
      <Routes>
        <Route exact path='/' element={<Form login={login} />} />
        <Route exact path='home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route exact path='about' element={<About/>} />
        <Route exact path='detail/:detailId' element={<Detail/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </div>
  )
}

export default App
