import { getPokemon } from "./http-provider";

// References html
const pokemonContainer = document.querySelector( '.pokemon-container' );
const searchBar        = document.querySelector( '.search-bar' );
const btnSearch        = document.querySelector( 'button' );

// Events
const events = () => {
    
    // when we click the button, call the function getSearchedPokemon if there's a value
    btnSearch.addEventListener( 'click', () => (searchBar.value.length > 0) ? getSearchedPokemon() : '' );

    // when we click enter, call the functions getSearchedPokemon if there's a value
    searchBar.addEventListener( 'keyup', event => {
        
        if( event.keyCode === 13 && searchBar.value.length > 0 ) {

            getSearchedPokemon()

        }

    })

}

const getSearchedPokemon = async () => {

    // get the pokemon's name and made the request for the name
    // and pass the pokemon to the drawPokemon function to show it in the html

    const searchedValueInput = searchBar.value;
    // console.log( searchedValueInput );

    drawPokemon( await getPokemon( searchedValueInput ) );

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
    
    // console.log( pokemon );
    // console.log( pokemon.sprites.front_default );

}


export const init = () => {
    events();
}