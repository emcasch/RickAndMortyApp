import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { orderCards, filterCards } from '../../redux/actions'

const Favourites = (props) => {
  
  const dispatch = useDispatch()

  const handleOrderChange = (event) => {
    dispatch(orderCards(event.target.value))
  }

  const handleGenderChange = (event) => {
    dispatch(filterCards(event.target.value))
  }


  return (
    <div>
      <div>
        <select name="Ordenamiento" onChange={handleOrderChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="Género" onChange={handleGenderChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
        {
          props.myFavourites.map(({id, name, species, gender, image}) => {
            return <div key={id}>
              <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
              </Link>
              <h2>{species}</h2>
              <h2>{gender}</h2>
              <img src={image} alt={name} />
            </div>
          })
        }
    </div>
  )
}

function mapStateToProps(state){
  return {
    myFavourites: state.myFavourites
  }
}

export default connect(mapStateToProps, null)(Favourites)
