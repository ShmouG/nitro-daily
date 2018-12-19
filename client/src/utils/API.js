import axios from 'axios';

export default {
  // Gets all books
  getCharacters() {
    return axios.get('/characters');
  },
  // Gets the book with the given id
  getCharacterbyID(id) {
    return axios.get(`/characters/${id}`);
  },
  // Deletes the book with the given id
  // deleteCharacter(id) {
  //   return axios.delete(`/api/characters/${id}`);
  // },
  // Saves a book to the database
  saveCharacter(charData) {
    return axios.post('/characters', charData);
  },
  getScenario(num) {
    return axios.get(`/api/scenario/${num}`);
  },
};
