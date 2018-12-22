import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle, Button,
} from 'reactstrap';
// import Input from '../Input';
// import DecisionButton from '../../components/DecisionButtons';
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
    this.loadScenario();
  }

  loadScenario = () => {
    // const { sceneProps } = this.state;
    API.getScenarios()
      .then(res => this.setState({ scenario: res.data[4] }))
      .catch(err => console.log(err));
  }


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
    const { location } = scenario;
    const { context } = scenario;
    const { option1 } = scenario;
    const { option2 } = scenario;
    const { option3 } = scenario;

    // const { options } = this.state;
    return (
      <div className="wrapper">
        <Card className="d-flex justify-content-center">
          <CardBody>
            <CardTitle>
              {location}
            </CardTitle>
          </CardBody>
          <LocationImage location={location} />
          {/* <ActionLog /> */}
          <CardBody>
            <CardText>
              {/* {this.state.scenario.context} */}
              {context}
            </CardText>
            {/* <Input /> */}
            <div className="d-flex flex-column">
              <Button className="decision" color="success">{option1}</Button>
              <Button className="decision" color="success">{option2}</Button>
              <Button className="decision" color="success">{option3}</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Game;
