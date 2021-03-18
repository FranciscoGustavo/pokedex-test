// import axios from "axios";

export const askQuestion = async ({ key, question }) => {
  return Promise.resolve({
    message: "Hola ¿Como estas?",
    type: "addressee",
  });
  /* const res = await axios.get(`http://beta.soldai.com/bill-cipher/askquestion?session_id=1903135173030124&key=${key}&question=${question}`);

  const data = res.data.current_response;

  return {
    message: data.message || data.default_answer,
    type: 'addressee',
  } */
};
