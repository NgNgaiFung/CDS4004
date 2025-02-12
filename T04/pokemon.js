function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}


// ajax
async function fetchPokemon(url) {
    const response = await fetch(url);
    const pokemon = await response.json();
    console.log(pokemon);
    const div = document.getElementById(pokemon.name);

    const pid = document.createElement('p');
    pid.className = 'pid';
    const textNode = document.createTextNode(pokemon.id);
    pid.appendChild(textNode);
    div.appendChild(pid);

    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    div.appendChild(img);

    const name = document.createElement('p');
    name.className = 'name';
    const nameNode = document.createTextNode(pokemon.name);
    name.appendChild(nameNode);
    div.appendChild(name);

    const types = document.createElement('p');
    types.className = 'types';
    const typesNode = document.createTextNode(pokemon.types.map(typeInfo => typeInfo.type.name).join(', '));
    types.appendChild(typesNode);
    div.appendChild(types);

}

// ajax
async function fetchPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
    pokemons = await response.json();
    const pokemons_div = document.getElementById('pokemons');
    // console.log(pokemons);
    for (const pokemon of pokemons.results) {
        const div = document.createElement('div');
        div.className = 'pokemon';
        div.id = pokemon.name;
        console.log(pokemon);
        pokemons_div.appendChild(div);
        // style

        div.style.width = '200px';
        div.style.height = '200px';
        div.style.margin = '10px';
        div.style.padding = '30px';
        div.style.borderRadius = '10px';
        div.style.display = 'inline-block';
        div.style.textAlign = 'center';
        div.style.verticalAlign = 'top';
        div.style.border = '1px solid black';

        fetchPokemon(pokemon.url);
    }
}

fetchPokemons();