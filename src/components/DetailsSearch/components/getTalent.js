export default function getTalent(pokemons) {
  let talents = [];
  pokemons.map((pokemon) => {
    if (pokemon.talents != null) {
      Object.keys(pokemon.talents).map((talent) => {
        talents.push(pokemon.talents[talent].name);
      });
    }
  });

  talents = talents.filter((item, index) => talents.indexOf(item) === index);

  return talents;
}
