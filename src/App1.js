import React from "react";
import Button from "@material-ui/core/Button";
import io from "socket.io-client";

var socket = io.connect("wss://fx.glitch.me");

// var username = prompt("What's your username?");

const Button1 = () => (
  <Button variant="contained" color="primary">
    Hello World
  </Button>
);

export default class App extends React.Component {
  handleClick = (e, id) => {
    socket.emit("message", "Hi server, how are you?");

    console.log(id);
  };

  componentDidMount = () => {
    socket.on("message", function(message) {
      console.log("The server has a message for you: " + message);
    });
  };
  render() {
    return (
      <div>
        <Button
          variant="contained"
          style={{ margin: 5 }}
          onClick={e => this.handleClick(e, "one")}
        >
          Default
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: 5 }}
          onClick={e => this.handleClick(e, "two")}
        >
          Primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: 5 }}
          onClick={e => this.handleClick(e, "three")}
        >
          Secondary
        </Button>
      </div>
    );
  }
}
