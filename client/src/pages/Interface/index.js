import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';
// import Input from '../Input';
import DecisionButton from '../../components/DecisionButtons';
import LocationImage from '../../components/LocationImage';
import './style.css';
import API from '../../utils/API';

class Game extends Component {
  // mock state
  constructor(props) {
    super(props);
    this.state = {
      scenario: {},
      // location: 'Coffee Shop',
      // context: 'Here\'s some information',
      // options: ['option1', 'option2', 'option3'],
    };
  }

  componentDidMount() {
    this.loadScenario
  }
  
  loadScenario = () => {
    API.getScenario(this.props.match.params.id)
    .then(res => this.setState({ scenario: res.data }))
    .catch(err => console.log(err));
  }

  // Getting info for the books
  // loadScenario = () => {
  //   API.getScenario()
  //     .then(res => this.setState({ location: res.location, context: res.context }))
  //     .catch(err => console.log(err));
  // };

  // This is for generating buttons
  // handleChoice(i) {
  //   // const { history } = this.state;
  //   // const { current } = history[]
  //   console.log(i.props.children);
  //   // const { choice } = this.DecisionButtons;
  //   // console.log(choice.text());
  // }


  render() {
    const { scenario } = this.state;
    const { location } = scenario.location;
    const { context } = scenario.context;
    // const { options } = this.state;
    return (
      <div className="wrapper">
        <Card className="d-flex justify-content-center">
          <CardBody>
            <CardTitle>
              {location}
            </CardTitle>
          </CardBody>
          <LocationImage />
          {/* <ActionLog /> */}
          <CardBody>
            <CardText>
              {context}
            </CardText>
            {/* <Input /> */}
            <DecisionButton />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Game;
