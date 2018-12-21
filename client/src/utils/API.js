import axios from 'axios';

export default {
  // getCharacters() {
  //   return axios.get('/characters');
  // },
  // // Gets the book with the given id
  // getCharacterbyID(id) {
  //   return axios.get(`/characters/${id}`);
  // },
  // // Deletes the book with the given id
  // // deleteCharacter(id) {
  // //   return axios.delete(`/api/characters/${id}`);
  // // },
  // // Saves a book to the database
  saveUser(save) {
    return axios.post('/characters', save);
  },
  getScenario(id) {
    return axios.get(`/api/scenario/${id}`);
  },
  getScenarios() {
    return axios.get('/api/scenario');
  },
};
