import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';
// import Input from '../Input';
import DecisionButton from '../../components/DecisionButtons';
import LocationImage from '../../components/LocationImage';
import './style.css';

class Game extends Component {
  // mock state
  constructor(props) {
    super(props);
    this.state = {
      location: 'Coffee Shop',
      context: 'Here\'s some information',
      // options: ['option1', 'option2', 'option3'],
    };
  }

  // componentDidMount() {
  //   this.loadInfo();
  // }

  // Getting info for the books
  // loadInfo = () => {
  //   API.getInfo()
  //     .then(res => this.setState({ location: res.location, context: res.context }))
  //     .catch(err => console.log(err));
  // };

  // handleChoice(i) {
  //   // const { history } = this.state;
  //   // const { current } = history[]
  //   console.log(i.props.children);
  //   // const { choice } = this.DecisionButtons;
  //   // console.log(choice.text());
  // }


  render() {
    const { location } = this.state;
    const { context } = this.state;
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
