import React from "react";
import Lampa from "./Lampa";
import LampakSzama from "./lampakSzama";

const segedTomb = [
  {
    id: 0,
    allapot: true,
  },
  {
    id: 1,
    allapot: true,
  },
  {
    id: 2,
    allapot: true,
  },
  {
    id: 3,
    allapot: true,
  },
  {
    id: 4,
    allapot: true,
  },
  {
    id: 5,
    allapot: true,
  },
  {
    id: 6,
    allapot: true,
  },
  {
    id: 7,
    allapot: true,
  },
  {
    id: 8,
    allapot: true,
  },
];

class Jatekter extends React.Component {
  constructor() {
    super();
    this.state = {
      aktElemIndex: 0,
      tomb: segedTomb,
      lampakSzama: 0,
    };
  }

  szomszedok = (id) => {
    const meret = 3;

    if (id > meret - 1) {
      segedTomb[id - meret].allapot = !segedTomb[id - meret].allapot;
    }
    if (id < meret * meret - meret) {
      segedTomb[id + meret].allapot = !segedTomb[id + meret].allapot;
    }
    if (id % meret !== 0) {
      segedTomb[id - 1].allapot = !segedTomb[id - 1].allapot;
    }
    if (id % meret !== meret - 1) {
      segedTomb[id + 1].allapot = !segedTomb[id + 1].allapot;
    }
  };

  kattintas = (id) => {
    // console.log("lámpa: " + id);
    this.szomszedok(id);
    let lampakSzama = 0;
    segedTomb.forEach((elem) => {
      if (elem.allapot == false) {
        lampakSzama++;
      }
    });

    this.setState({
      aktElemIndex: id,
      tomb: segedTomb,
      lampakSzama: lampakSzama,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="jatekter">
          {this.state.tomb.map((elem) => {
            return (
              <Lampa
                key={elem.id}
                id={elem.id}
                allapot={elem.allapot}
                kattintas={this.kattintas}
              />
            );
          })}
        </div>
        <div className="ujJatek">
          <button>Új játék</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Jatekter;
