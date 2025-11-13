const fetchData = async () => {
  try {
    const pokemonName = document.getElementById("pokename").value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Cannot Fetch Data!");
    }

    const data = await response.json();

    const card = document.getElementById("card");
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    const pokemon = document.getElementById("name");
    imgElement.src = pokemonSprite;
    pokemon.innerHTML = `Name :${data.name}`;
    card.style.display = "block";
  } catch (error) {
    console.log(error);
  }
};


