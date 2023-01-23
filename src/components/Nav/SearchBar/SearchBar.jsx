import { useState } from "react";

function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   let randomNumber = Math.ceil(Math.random() * 826)
   
   return (
      <div>
         <input type='search' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)}>Agregar</button>
         <button onClick={() => onSearch(randomNumber)}>Random</button>
      </div>
   );
}

export default SearchBar;
