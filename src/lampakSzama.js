import "./Elem.css";
import React from "react";

class LampakSzama extends React.Component {
  constructor() {}

  render() {
    return (
      <div className="info">
        <p>Felkapcsolt lámpák száma: {this.state.lampakSzama}</p>
      </div>
    );
  }
}

export default LampakSzama;
