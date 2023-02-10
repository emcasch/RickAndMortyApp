import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId])

    return(
        <div>
            <button>
                <Link to='/home' >Volver</Link>
            </button>
            <h1>{character?.name}</h1>
            <p><strong>Estado: </strong>{character?.status}</p>
            <p><strong>Especie: </strong>{character?.species}</p>
            <p><strong>Género: </strong>{character?.gender}</p>
            <p><strong>Origen: </strong>{character?.origin}</p>
            <img src={character?.image} alt={character.name} />
        </div>
    )
}

export default Detail;