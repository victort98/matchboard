import React, { useState } from "react";

import Clock from "../../controlboard/Clock";
import { Row, Col } from "reactstrap";

const Basketball = () => {
  const [homeScore, sethomeScore] = useState(0);
  const [guestScore, setguestScore] = useState(0);

  const [quarter, setquarter] = useState(0);

  const [homeFoul, setHomeFoul] = useState(0);
  const [homeTimeOut, setHomeTimeOut] = useState(0);
  const [homeBonus, setHomeBonus] = useState(4);

  const [guestFoul, setGuestFoul] = useState(0);
  const [guestTimeOut, setGuestTimeOut] = useState(0);
  const [guestBonus, setGuestBonus] = useState(4);

  const [number, setNumber] = useState(0);
  const [points, setPoints] = useState(0);

  const [homeTeam, setHomeTeam] = useState([
    { name: "Ghayssa", number: 4, points: 0 },
    { name: "Maruf", number: 15, points: 0 },
    { name: "Thomas", number: 8, points: 0 },
    { name: "Johan", number: 10, points: 0 },
    { name: "Pettern", number: 1, points: 0 },
    { name: "Goran", number: 6, points: 0 },
  ]);

  const [guestTeam, setGuestTeam] = useState([
    { name: "Joakim", number: 5, points: 0 },
    { name: "Viktor", number: 15, points: 0 },
    { name: "Naim", number: 11, points: 0 },
    { name: "Hassan", number: 1, points: 0 },
    { name: "Niklas", number: 4, points: 0 },
    { name: "Malin", number: 22, points: 0 },
    { name: "Joakim", number: 3, points: 0 },
  ]);

  function decrementHomeFoul() {
    if (homeFoul != 0) {
      setHomeFoul(homeFoul - 1);
    }
  }
  function decrementHomeTimeOut() {
    if (homeTimeOut != 0) {
      setHomeTimeOut(homeTimeOut - 1);
    }
  }

  function decrementHomeBonus() {
    if (homeBonus != 0) {
      setHomeBonus(homeBonus - 1);
    }
  }

  function increaseHomeBonus() {
    if (homeBonus != 4) {
      setHomeBonus(homeBonus + 1);
    }
  }

  function decrementGuestfoul() {
    if (guestFoul != 0) {
      setGuestFoul(guestFoul - 1);
    }
  }

  function decrementGuestTimeOut() {
    if (guestTimeOut != 0) {
      setGuestTimeOut(guestTimeOut - 1);
    }
  }

  function decrementGuestBonus() {
    if (guestBonus != 0) {
      setGuestBonus(guestBonus - 1);
    }
  }

  function increaseGuestBonus() {
    if (guestBonus != 4) {
      setGuestBonus(guestBonus + 1);
    }
  }

  function addHomeOnePlayerScore() {
    let tempTeam = [];
    for (let i = 0; i < homeTeam.length; i++) {
      if (number == homeTeam[i].number) {
        homeTeam[i].points = homeTeam[i].points + 1;
        setPoints(homeTeam[i].points);
      }
    }
    tempTeam = homeTeam;
    setHomeTeam(tempTeam);
    console.log(homeTeam);
  }

  function addHomeTwoPlayerScore() {
    let tempTeam = [];
    for (let i = 0; i < homeTeam.length; i++) {
      if (number == homeTeam[i].number) {
        homeTeam[i].points = homeTeam[i].points + 2;
        setPoints(homeTeam[i].points);
      }
    }
    tempTeam = homeTeam;
    setHomeTeam(tempTeam);
    console.log(homeTeam);
  }
  function addHomeThreePlayerScore() {
    let tempTeam = [];
    for (let i = 0; i < homeTeam.length; i++) {
      if (number == homeTeam[i].number) {
        homeTeam[i].points = homeTeam[i].points + 3;
        setPoints(homeTeam[i].points);
      }
    }
    tempTeam = homeTeam;
    setHomeTeam(tempTeam);
    console.log(homeTeam);
  }

  function addGuestOnePlayerScore() {
    let tempTeam = [];
    for (let i = 0; i < guestTeam.length; i++) {
      if (number == guestTeam[i].number) {
        guestTeam[i].points = guestTeam[i].points + 1;
        setPoints(guestTeam[i].points);
      }
    }
    tempTeam = guestTeam;
    setHomeTeam(tempTeam);
    console.log(guestTeam);
  }

  function addGuestTwoPlayerScore() {
    let tempTeam = [];
    for (let i = 0; i < guestTeam.length; i++) {
      if (number == guestTeam[i].number) {
        guestTeam[i].points = guestTeam[i].points + 2;
        setPoints(guestTeam[i].points);
      }
    }
    tempTeam = guestTeam;
    setHomeTeam(tempTeam);
    console.log(guestTeam);
  }
  function addGuestThreePlayerScore() {
    let tempTeam = [];
    for (let i = 0; i < guestTeam.length; i++) {
      if (number == guestTeam[i].number) {
        guestTeam[i].points = guestTeam[i].points + 3;
        setPoints(guestTeam[i].points);
      }
    }
    tempTeam = guestTeam;
    setHomeTeam(tempTeam);
    console.log(guestTeam);
  }

  function setPointOne() {
    for (let i = 0; i < homeTeam.length; i++) {
      if (homeTeam[i].number === number) {
        setPoints(homeTeam[i].points++);
      }
    }
  }

  console.log(homeScore);
  return (
    <div className="bcontrolboard">
      <Row
        style={{
          margin: "5px",
          backgroundColor: "yellow",
          height: "100px ",
          alignContent: "center",
          display: "flex",
          textAlign: "center",
          justifyContent: "space-around",
        }}
      >
        <Col
          style={{
            color: "black",
            verticalalignment: "middle",
            margin: "30px",
          }}
        >
          <select>
            <option>Set the game</option>
            <option>NBA</option>
            <option>NCAA C.M.</option>
            <option>NCAA C.M.</option>
          </select>
        </Col>
        <Col
          style={{
            margin: "20px",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <h2>Quarter:{quarter}</h2>
        </Col>
        <Col style={{ margin: "10px" }}>
          <placeholder>
            <h1>Timer</h1>
          </placeholder>
        </Col>
        <Col>
          <button
            style={{
              color: "red",
              width: "auto",
              height: "auto",
              margin: "15px",
            }}
          >
            <h2> Countdown </h2>
          </button>
        </Col>
      </Row>
      <Row
        style={{
          height: "70px",
          color: "red",
          display: "flex",
          justifyContent: "space-around",
          background: "green",
        }}
      >
        <Col
          style={{
            justifyContent: "space-around",
            width: "25%",
            display: "flex",
          }}
        >
          <button
            style={{
              color: "white",
              width: "125px",
              height: "auto",
              margin: "auto",
            }}
            onClick={() => setquarter(quarter - 1)}
            className="p "
          >
            Count Down
          </button>
          <button
            style={{
              color: "white",
              width: "155px",
              height: "auto",
              margin: "auto",
            }}
            onClick={() => setquarter(quarter + 1)}
            className="p "
          >
            Set the Quarter
          </button>
        </Col>
        <button
          style={{
            color: "red",
            width: "125px",
            height: "auto",
            margin: "auto",
            backgroundcolor: "black",
          }}
        >
          Start
        </button>

        <button
          style={{
            color: "red",
            width: "125px",
            height: "auto",
            margin: "auto",
            backgroundcolor: "black",
          }}
        >
          Stop
        </button>

        <button
          style={{
            color: "red",
            width: "125px",
            height: "auto",
            margin: "auto",
            backgroundcolor: "black",
          }}
        >
          Restart
        </button>
      </Row>

      <Row
        style={{
          display: "flex",
          backgroundColor: "yellow",
          height: "170px ",
          textAlign: "center",
          alignContent: "middle",
          justifyContent: "space-around",
          margin: "5px",
          padding: "10px",
        }}
      >
        <Col>
          <h2>Home:{homeScore}</h2>
          <h2>Team Foul:{homeFoul}</h2>
          <h2>Time Out:{homeTimeOut}</h2>
          <h2>Bonus:{homeBonus}</h2>
        </Col>
        <Col>
          <button type="button" class="btn btn-info">
            <h1>result</h1>
          </button>
          <h2>Number:{number}</h2>
          <h2>Points:{points}</h2>
        </Col>
        <Col>
          <h2>Guest:{guestScore}</h2>
          <h2>Team Foul:{guestFoul}</h2>
          <h2>Time Out:{guestTimeOut}</h2>
          <h2>Bonus:{guestBonus}</h2>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          textAlign: "center",
          alignContent: "center",
          backgroundColor: "red",
          height: "300px ",
          justifyContent: "space-around",
        }}
      >
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <row
            style={{
              display: "flex",
              justifyContent: "spacearound",
              alignContent: "center",
            }}
          >
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => decrementHomeFoul()}
              className="p"
            >
              Count Down
            </button>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => setHomeFoul(homeFoul + 1)}
              className="p"
            >
              Team Foul
            </button>
          </row>
          <button
            style={{
              color: "white",
              width: "85px",
              height: "auto",
              margin: "auto",
              justifyContent: "spacearound",
            }}
            onClick={() => setHomeFoul(homeFoul - homeFoul)}
            className="p"
          >
            Reset
          </button>
          <row style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => decrementHomeTimeOut(homeTimeOut - 1)}
              className="p"
            >
              Count Down
            </button>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => setHomeTimeOut(homeTimeOut + 1)}
              className="p"
            >
              Time Out
            </button>
          </row>
          <button
            style={{
              color: "white",
              width: "85px",
              height: "auto",
              margin: "auto",
            }}
            onClick={() => setHomeTimeOut(homeTimeOut - homeTimeOut)}
            className="p"
          >
            Reset
          </button>
          <row style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => increaseHomeBonus()}
              className="p"
            >
              Count Up
            </button>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => decrementHomeBonus()}
              className="p"
            >
              Bonus -
            </button>
          </row>
          <button
            style={{
              color: "white",
              width: "85px",
              height: "auto",
              margin: "auto",
            }}
            onClick={() => setHomeBonus(4)}
            className="p"
          >
            Reset
          </button>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <row>
            <select
              onChange={(e) => setNumber(e.target.value)}
              style={{
                background: "red",
                color: "white",
                border: "white 2px solid",
              }}
            >
              <option>Number</option>
              {homeTeam.map((player) => (
                <option>{player.number} </option>
              ))}
            </select>
            <button
              style={{
                background: "red",
                color: "white",
                border: "white 2px solid",
                margin: "5px",
              }}
              onClick={() => addHomeOnePlayerScore()}
            >
              Add points
            </button>
            <button
              style={{ width: "150px" }}
              onClick={() => sethomeScore(homeScore + 1)}
              className="p p1"
            >
              1
            </button>
          </row>
          <row>
            <select
              onChange={(e) => setNumber(e.target.value)}
              style={{
                background: "red",
                color: "white",
                border: "white 2px solid",
              }}
            >
              <option>Number</option>
              {homeTeam.map((player) => (
                <option>{player.number} </option>
              ))}
            </select>
            <button
              style={{
                width: "auto",
                height: "50",
                margin: "5px",
                background: "red",
                border: "white 2px solid",
                color: "white",
              }}
              onClick={() => addHomeTwoPlayerScore()}
            >
              Add points
            </button>
            <button
              style={{ width: "150px" }}
              onClick={() => sethomeScore(homeScore + 2)}
              className="p p1"
            >
              2
            </button>
          </row>
          <row>
            <select
              onChange={(e) => setNumber(e.target.value)}
              style={{
                background: "red",
                color: "white",
                border: "white 2px solid",
              }}
            >
              <option>Number</option>
              {homeTeam.map((player) => (
                <option>{player.number} </option>
              ))}
            </select>
            <button
              style={{
                background: "red",
                color: "white",
                border: "white 2px solid",
                margin: "5px",
              }}
              onClick={() => addHomeThreePlayerScore()}
            >
              Add points
            </button>
            <button
              style={{ width: "150px" }}
              onClick={() => sethomeScore(homeScore + 3)}
              className="p p1"
            >
              3
            </button>
          </row>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <row>
            <button
              style={{ width: "150px" }}
              onClick={() => setguestScore(guestScore + 1)}
              className="p p1"
            >
              1
            </button>
            <select
              onChange={(e) => setNumber(e.target.value)}
              style={{
                background: "red",
                color: "white",
                border: "white 2px solid",
              }}
            >
              <option>Number</option>
              {guestTeam.map((player) => (
                <option>{player.number} </option>
              ))}
            </select>
            <button
              style={{
                width: "auto",
                height: "50",
                margin: "5px",
                background: "red",
                border: "white 2px solid",
                color: "white",
              }}
              onClick={() => addGuestOnePlayerScore()}
            >
              Add points
            </button>
          </row>
          <Row>
            <button
              style={{ width: "150px" }}
              onClick={() => setguestScore(guestScore + 2)}
              className=" p p1"
            >
              2
            </button>
            <select
              onChange={(e) => setNumber(e.target.value)}
              style={{
                background: "red",
                color: "white",
                border: "white 2px solid",
              }}
            >
              <option>Number</option>
              {guestTeam.map((player) => (
                <option>{player.number} </option>
              ))}
            </select>
            <button
              style={{
                width: "auto",
                height: "50",
                margin: "5px",
                background: "red",
                border: "white 2px solid",
                color: "white",
              }}
              onClick={() => addGuestTwoPlayerScore()}
            >
              Add points
            </button>
          </Row>
          <Row>
            <button
              style={{ width: "150px" }}
              onClick={() => setguestScore(guestScore + 3)}
              className="p p1"
            >
              3
            </button>
            <select
              onChange={(e) => setNumber(e.target.value)}
              style={{
                background: "red",
                color: "white",
                border: "white 2px solid",
              }}
            >
              <option>Number</option>
              {guestTeam.map((player) => (
                <option>{player.number} </option>
              ))}
            </select>
            <button
              style={{
                width: "auto",
                height: "50",
                margin: "5px",
                background: "red",
                border: "white 2px solid",
                color: "white",
              }}
              onClick={() => addGuestThreePlayerScore()}
            >
              Add points
            </button>
          </Row>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <row style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => setGuestFoul(guestFoul + 1)}
              className="p"
            >
              Team Foul
            </button>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => decrementGuestfoul()}
              className="p"
            >
              Count Down
            </button>
          </row>
          <button
            style={{
              color: "white",
              width: "85px",
              height: "auto",
              margin: "auto",
            }}
            onClick={() => setGuestFoul(guestFoul - guestFoul)}
            className="p"
          >
            Reset
          </button>
          <row style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => setGuestTimeOut(guestTimeOut + 1)}
              className="p"
            >
              Time Out
            </button>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => decrementGuestTimeOut()}
              className="p"
            >
              Count Down
            </button>
          </row>
          <button
            style={{
              color: "white",
              width: "85px",
              height: "auto",
              margin: "auto",
            }}
            onClick={() => setGuestTimeOut(guestTimeOut - guestTimeOut)}
            className="p "
          >
            Reset
          </button>
          <row style={{ display: "flex", justifyContent: "space-around" }}>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => decrementGuestBonus()}
              className="p"
            >
              Bonus -
            </button>
            <button
              style={{
                color: "white",
                width: "85px",
                height: "auto",
                margin: "5px",
              }}
              onClick={() => increaseGuestBonus()}
              className="p"
            >
              Count Up
            </button>
          </row>
          <button
            style={{
              color: "white",
              width: "85px",
              height: "auto",
              margin: "auto",
            }}
            onClick={() => setGuestBonus(4)}
            className="p"
          >
            Reset
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Basketball;
