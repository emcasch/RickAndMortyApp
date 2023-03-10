const axios = require('axios')

const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
        const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin.name
        }
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify(character))
    })
    .catch(error => {
        res.writeHead(500, { "Content-type": "text/plain" })
        res.end(error.message)
      });
}

module.exports = {
    getCharDetail
}