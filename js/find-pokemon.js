function fetchPokemon() {
  var dato = inputPokemon.value.toLowerCase();

  fetch('https://pokeapi.co/api/v2/pokemon/' + dato)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      showPokemon(res);
    })
    .catch((error) => showError(error));
}
function showPokemon(pokemonJSONList) {
  //image
  imgPokemon.src = pokemonJSONList.sprites.other.dream_world.front_default;
  //name first letter upperCase
  document.getElementById('namePokemon').innerText =
    pokemonJSONList.name.charAt(0).toUpperCase() +
    pokemonJSONList.name.slice(1);
  // ID
  document.getElementById('namePokemon').innerText +=
    '\n#' + pokemonJSONList.id;
  // traits
  traitsPokemon.innerText =
    'Height: ' + pokemonJSONList.height + '\nWeight: ' + pokemonJSONList.weight;
  traitsPokemon.innerText +=
    '\nAbilities: ' +
    showAbilities(pokemonJSONList.abilities) +
    '\nHeld Items: ' +
    showHeldItems(pokemonJSONList.held_items);
  // stats
  statsPokemon.innerText = '\nStats: ' + showStats(pokemonJSONList.stats);
}

function showAbilities(hab) {
  console.log(hab);
  let habList = [];
  for (let i in hab) {
    habList.push('\t' + hab[i].ability.name);
  }
  return habList;
}

function showHeldItems(heldItems) {
  console.log(heldItems);
  let heldItemsList = [];
  for (let i in heldItems) {
    heldItemsList.push('\t' + heldItems[i].item.name);
  }
  return heldItemsList;
}

function showMoves(moves) {
  let movesList = [];
  for (let i in moves) {
    movesList.push('\t' + moves[i].move.name);
  }
  return movesList;
}

/* $('li').first().append(response.stats[5].base_stat); // hp
$('li').eq(1).append(response.stats[4].base_stat); // attack
$('li').last().append(response.stats[3].base_stat); // defense
 */
function showStats(stats) {
  let statsList = [];
  for (let i in stats) {
    statsList.push('\t' + stats[i].stat.name + ': ' + stats[i].base_stat);
  }
  return statsList;
}

function showError(error) {
  if (
    error ==
    'SyntaxError: Unexpected token \'N\', "Not Found" is not valid JSON'
  ) {
    Swal.fire({
      title: 'Pokemon not found in the database.',
      width: 600,
      padding: '2em',
      color: '#716add',
    });
  } else {
    Swal.fire({
      title: 'Cannot connect to the database. Error: ' + error,
      width: 600,
      padding: '2em',
      color: '#716add',
    });
  }
}
