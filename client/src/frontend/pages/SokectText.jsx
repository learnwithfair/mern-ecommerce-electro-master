import React, { Component } from "react";
import io from "socket.io-client";
export default class SokectText extends Component {
  componentDidMount() {
    const socket = io.connet("http://localhost:3000/socket-text2");
    console.log(socket);
  }
  render() {
    return <div>SokectText</div>;
  }
}
