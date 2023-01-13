function Card({ name, gender, onClose, species, image }) {
   //props --> {name: '', species: '', gender: '', image: '', onClose: fn}
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}


export default Card;
