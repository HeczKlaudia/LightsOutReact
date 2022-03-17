import "./Elem.css";
import React from "react";

class Lampa extends React.Component {
  kattintasKezelo = () => {
    this.props.kattintas(this.props.id);
  };

  render() {
    return (
      <div
        className={this.props.allapot ? "elem szinFel" : "elem szinLe"}
        onClick={this.kattintasKezelo}
      >
        <div>{this.props.allapot}</div>
      </div>
    );
  }
}

export default Lampa;
