const pokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const result = response.json();
  return result;
};

export default pokemon;
