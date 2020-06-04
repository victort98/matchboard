import React, { useState } from "react";


import Clock from "../../controlboard/Clock";
import { Row, Col } from "reactstrap";

const Basketball = () => {
  const [homeScore, sethomeScore] = useState(0);
  const [guestScore, setguestScore] = useState(0);

  const [quarter, setquarter] = useState(0);
  const [homeFoul, setHomeFoul] = useState(0);
  const [homeTimeOut, setHomeTimeOut] = useState(0);

  const [foul, setfoul] = useState(0);
  const [timeOut, settimeOut] = useState(0);
  const [bonus, setBonus] = useState(4);
  const [homeBonus, setHomeBonus] = useState(4);

  const [number, setNumber] = useState(0);
  const [points, setPoints] = useState(0);

  const [homeTeam, setHomeTeam] = useState( [
    { name: "Ghayssa", number: 4, points: 0 },
    { name: "Maruf", number: 15, points: 0 },
    { name: "Thomas", number: 8, points: 0 },
    { name: "Johan", number: 10, points: 0 },
  ]);

  function decrementHomeFoul() {
    if (homeFoul != 0) {
      setHomeFoul(homeFoul - 1)
    } 
      
  }

  function addPlayerScore() {
    let tempTeam=[]
    for (let i = 0; i < homeTeam.length; i++){
      if (number == homeTeam[i].number) {
        homeTeam[i].points = homeTeam[i].points + 2
        setPoints(homeTeam[i].points)
      }
    }
    tempTeam = homeTeam
    setHomeTeam(tempTeam)
    console.log(homeTeam)
  }
    
    


  let guestTeam = [
    { name: "Joakim", number: 5, points: 0 },
    { name: "Viktor", number: 15, points: 0 },
    {
      name: "Naim",
      number: 11,
      points: 0,
    },
    { name: "Hassan", number: 8, points: 0 },
  ];

  function plusOneHomeTeam() {
    
    
  };

  function SetValueAsNumber() {
    return
    
  };
  function setPointOne() {

    for (let i = 0; i < homeTeam.length; i++){
      if (homeTeam[i].number === number) {
        setPoints( homeTeam[i].points++)
       
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
            onClick={() =>  setquarter(quarter + 1)}
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
          <h2>Team Foul:{foul}</h2>
          <h2>Time Out:{timeOut}</h2>
          <h2>Bonus:{bonus}</h2>
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
              onClick={() => setHomeTimeOut(homeTimeOut - 1)}
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
              onClick={() => setHomeBonus(homeBonus + 1)}
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
              onClick={() => setHomeBonus(homeBonus - 1)}
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
            <select  onChange={(e)=>setNumber(e.target.value)} style={{background:"yellow",color:"red"}}>
               <option>Number</option>
            <option value={4} >4</option>
            <option value={15}>15</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
          </select>
            <button
              style={{ width: "auto", height: "50",margin:"5px" }}
              onClick={() => setPointOne()}
            >
              Add points
            </button>
            <button style={{width:"150px"}}
              onClick={() => sethomeScore(homeScore + 1)}
              className="p p1"
            >
              1
            </button>
          </row>
          <row>
             <select  onChange={(e)=>setNumber(e.target.value)} style={{background:"yellow",color:"red"}}>
              <option>Number</option>
              {homeTeam.map(player => <option>{player.number} </option>)}
           
          </select>
            <button
              style={{ width: "auto", height: "50",margin:"5px" }}
              onClick={() => addPlayerScore()}
            >
              Add points
            </button>
            <button style={{width:"150px"}}
              onClick={() => sethomeScore(homeScore + 2)}
              className="p p1"
            >
              2
            </button>
          </row>
          <row>
            <select  onChange={(e)=>setNumber(e.target.value)} style={{background:"yellow",color:"red"}}>
               <option>Number</option>
            <option value={4} >4</option>
            <option value={15}>15</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
          </select>
            <button
              style={{ width: "auto", height: "50", margin: "5px" }}
              onClick={() => plusOneHomeTeam()}
            >
              Add points
            </button>
            <button
              style={{width:"150px"}}
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
          <button style={{width:"150px"}}
            onClick={() => setguestScore(guestScore + 1)}
            className="p p1"
          >
            1
          </button>
          <input
              style={{ width: "60px", height: "40px",backgroundcolor:"white", color:"red", }}
               placeholder="number"
            ></input>
            <button
              style={{ width: "auto", height: "50",margin:"5px" }}
              onClick={() => plusOneHomeTeam()}
            >
              Add points
            </button>
            </row>
          <button style={{width:"150px"}}
            onClick={() => setguestScore(guestScore + 2)}
            className=" p p1"
          >
            2
          </button>
          <button style={{width:"150px"}}
            onClick={() => setguestScore(guestScore + 3)}
            className="p p1"
          >
            3
          </button>
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
              onClick={() => setfoul(foul + 1)}
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
              onClick={() => setfoul(foul - 1)}
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
            onClick={() => setfoul(foul - foul)}
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
              onClick={() => settimeOut(timeOut + 1)}
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
              onClick={() => settimeOut(timeOut - 1)}
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
            onClick={() => settimeOut(timeOut - timeOut)}
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
              onClick={() => setBonus(bonus - 1)}
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
              onClick={() => setBonus(bonus + 1)}
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
            onClick={() => setBonus(4)}
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
