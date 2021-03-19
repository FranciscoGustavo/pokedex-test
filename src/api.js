import axios from "axios";

/* const getPokemon = async (name) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const { abilities, stats, moves, weight, height, types } = res.data;
  const data = {
    abilities: abilities.map(({ ability }) => ability.name),
    stats: stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    moves: moves.map(({ move }) => move.name),
    weight,
    height,
    types: types.map(({ type }) => type.name),
  }
  return data
} */

export const askQuestion = async ({ key, question }) => {
  const res = await axios.get(
    `http://beta.soldai.com/bill-cipher/askquestion?session_id=1903135173030124&key=${key}&question=${question}`
  );

  const {
    /* parameters */ message,
    default_answer,
  } = res.data.current_response;

  // Get name of pokemones by parameters property

  // Fetch pokemon or pokemones
  // getPokemon()

  // Create answer

  return {
    message: message || default_answer,
    type: "addressee",
  };
};
