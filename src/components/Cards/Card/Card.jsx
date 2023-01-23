import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { addFavCharacter, deleteFavCharacter } from "../../../redux/actions"
import { useState, useEffect } from "react";

function Card(props) {

   const [isFav, setIsFav] = useState(false)
   console.log(props)

   useEffect(() => {
      props.myFavourites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavourites]);

   const handleFavourite = () => {
      if(isFav === true){
         setIsFav(false)
         props.deleteFavCharacter(props.id)
      }
      else if(isFav === false){
         setIsFav(true)
         props.addFavCharacter({...props})
      }
   }

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavourite}>❤️</button>
            ) : (
               <button onClick={handleFavourite}>🤍</button>
            )
         }
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name} />
      </div>
   );
}

function mapDispatchToProps(dispatch){
   return {
      addFavCharacter: (character)=>dispatch(addFavCharacter(character)),
      deleteFavCharacter: (id)=>dispatch(deleteFavCharacter(id))
   }
}

function mapStateToProps(state){
   return {
      myFavourites: state.myFavourites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
