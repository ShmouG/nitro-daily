import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import { Input, FormBtn } from '../components/Form';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';

class Characters extends Component {
  state = {
    characters: [],
    name: '',
    id: '',
  };

  // componentDidMount() {
  // getCharacters();
  // }

  loadCharacters = () => {
    API.getCharacters()
      .then(res => this.setState({ characters: res.data, name: '', id: '' }))
      .catch(err => console.log(err));
  }

  // deleteCharacter = id => {
  //   API.deleteCharacters(id)
  //     .then(res => this.loadCharacters(res))
  //     .catch(err => console.log(err));
  // };

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.name && this.state.id) {
      API.saveCharacter({
        name: this.state.name,
        id: this.state.id,
      })
        .then(res => this.getCharacters(res))
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Character List</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              {/* <Input
                value={this.state.id}
                onChange={this.handleInputChange}
                name="id"
                placeholder="ID (required)"
              /> */}
              <FormBtn
                disabled={!(this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Character
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Character List</h1>
            </Jumbotron>
            {this.state.characters.length ? (
              <List>
                {this.state.books.map(character => (
                  <ListItem key={character._id}>
                    <Link to={`/characters/${character._id}`}>
                      {character.name}
                      {character.id}
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Characters;
