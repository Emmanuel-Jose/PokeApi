const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

const getPokemon = async ( pokemonName ) => {

    //make the request and return the id, name, and default sprite of the pokemon selected

    try {

        const resp = await fetch( pokeApiUrl + `/${ pokemonName }`);
        
        if( !resp.ok ) throw 'No se pudo Realizar la petición'

        const { id, name, sprites: { front_default } } = await resp.json();

        return { id, name, sprites: { front_default } };
        
    } catch (error) {
        
        throw error;

    }

}


export {
    getPokemon
}