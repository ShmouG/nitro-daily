import axios from 'axios';

export default {
  // Gets all books
  getCharacters() {
    return axios.get('/api/characters');
  },
  // Gets the book with the given id
  //   getCharacter(id) {
  //     return axios.get(`/api/characters/${id}`);
  //   },
  //   // Deletes the book with the given id
  //   deleteCharacter(id) {
  //     return axios.delete(`/api/characters/${id}`);
  //   },
  //   // Saves a book to the database
  //   saveCharacter(characterData) {
  //     return axios.post('/api/characters', characterData);
  //   },

};
