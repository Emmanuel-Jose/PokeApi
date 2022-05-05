import { getPokemon } from "./http-provider";

// References html
const pokemonContainer = document.querySelector( '.pokemon-container' );
const searchBar        = document.querySelector( '.search-bar' );
const btnSearch        = document.querySelector( 'button' );

// Events
const events = () => {

    btnSearch.addEventListener( 'click',  async () => {

        //made the request for the pokemon searched

        const searchInputValue = searchBar.value;
        console.log( searchInputValue );
        
        drawPokemon( await getPokemon( searchInputValue ) );
        
    
    });

}

const drawPokemon = ( pokemon ) => {

    //create the elements and draw the elements in the html

    pokemonContainer.innerHTML  = '';

    const pokemonImg = document.createElement( 'img' );
    pokemonImg.src = pokemon.sprites.front_default;
    pokemonImg.classList.add( 'pokemon-img' );
    pokemonImg.dataset.id = pokemon.id;

    pokemonContainer.append( pokemonImg );

    const pokemonName = document.createElement( 'h2' );
    pokemonName.classList.add( 'pokemon-name' );
    pokemonName.innerText = pokemon.name;

    pokemonContainer.append( pokemonName );
    
    console.log( pokemon );
    console.log( pokemon.sprites.front_default );

}


export const init = () => {
    events();
}