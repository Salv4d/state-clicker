import { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 0,
      showButton: true,
    };

    this.random = this.random.bind(this);
  }

  random() {
    this.setState(Math.floor(Math.random() * this.props.maxNum));
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.random}</h1>
        <button onCLick={this.random}>Click Me!</button>
      </div>
    );
  }
}
