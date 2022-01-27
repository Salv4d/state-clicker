import { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 0,
    };

    this.random = this.random.bind(this);
  }

  random() {
    let rand = Math.floor(Math.random() * this.props.maxNum) + 1;
    this.setState({ random: rand });
  }

  render() {
    let msg;

    if (this.state.random === this.props.luckyNum) {
      msg = <h2>Your lucky number!</h2>;
    } else {
      msg = <button onClick={this.random}>Click Me!</button>;
    }

    return (
      <div>
        <h1>Number is {this.state.random}</h1>
        {msg}
      </div>
    );
  }
}

export default Clicker;
