import React from "react";
import "./basketball.css";
import { Row, Col } from "reactstrap";

const basketball = () => {
  return (
    <div className="container">
      <div className="upperBox">
        <div className="leftSide">
          <ul>
            <li>
              <h2>HOME</h2>
            </li>
            <li
              input
              placeholder
              type={setTimeout}
              className="redPlaceholder"
              value="0:00"
            ></li>
            <li>
              <h2>BONUS</h2>
            </li>
          </ul>
        </div>
        <div className="center">
          <input placeholder className="mainResultPlaceHolder"></input>
          <div>
            <ul className="possPeriod">
              <li className="poss">
                <h2>POSS</h2>
              </li>
              <li className="period">
                {" "}
                <h2>PERIOD</h2>{" "}
                <placeholder className="greenPlaceholder"></placeholder>{" "}
              </li>
              <li className="poss">
                <h2>POSS</h2>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightSide">
          <ul>
            <li>
              <h2>GUEST</h2>
            </li>
            <li className="redPlaceholder"></li>
            <li>
              <h2>BONUS</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="lowerBox">
        <div>
          <ul className="rowOne">
            <li>
              {" "}
              <h2>FOULS</h2>
            </li>
            <li>
              {" "}
              <h2>TOL</h2>
            </li>
            <li>
              {" "}
              <h2>PLAYERS</h2>
            </li>
            <li>
              {" "}
              <h2>POINTS</h2>
            </li>
            <li>
              {" "}
              <h2>FOULS</h2>
            </li>
            <li>
              {" "}
              <h2>TOL</h2>
            </li>
            <li>
              {" "}
              <h2>PLAYERS</h2>
            </li>
          </ul>
        </div>

        <div>
          <ul className="rowTwo">
            <li>
              {" "}
              <input placeholder></input>
            </li>
            <li>
              {" "}
              <input placeholder></input>
            </li>
            <li>
              {" "}
              <input placeholder></input>
            </li>
            <li>
              {" "}
              <input placeholder></input>
            </li>
            <li>
              {" "}
              <input placeholder></input>
            </li>
            <li>
              {" "}
              <input placeholder></input>
            </li>
            <li>
              {" "}
              <input placeholder></input>
            </li>
          </ul>
        </div>
      </div>

      <div className="controlboard">
        <Row
          style={{
            backgroundColor: "yellow",
            height: "50px ",
            alignContent: "center",
          }}
        >
          <Col>
            <select style={{ background: "red", color: "white" }}>
              <option>NBA</option>
              <option>NCAA C.M.</option>
              <option>NCAA C.M.</option>
            </select>
          </Col>
          <Col>
            <button style={{ borderRadius: "30%", img: "circle" }}>
              Countdown
            </button>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "green",
            height: "50px",
            alignContent: "center",
          }}
        >
          <Col>
            {" "}
            <button type="button" class="btn btn-success">
              Set the Quarter
            </button>
          </Col>
          <Col>
            {" "}
            <button type="button" class="btn btn-primary">
              Start
            </button>
          </Col>
          <Col>
            {" "}
            <button type="button" class="btn btn-warning">
              Stop
            </button>
          </Col>
          <Col>
            {" "}
            <button type="button" class="btn btn-danger">
              Restart
            </button>
          </Col>
        </Row>

        <Row
          style={{
            backgroundColor: "blue",
            height: "200px",
            alignContent: "center",
          }}
        >
          <Col className="col md-5">
            <h2 style={{ textAlign: "center" }}>HOME</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "around",
              }}
            >
              <button type="button" class="btn btn-info">
                Enter the name of the Teams
              </button>
              <button type="button" class="btn btn-info">
                Enter the name of the Players
              </button>
              <button type="button" class="btn btn-info">
                Enter the name of the Coach
              </button>
            </div>
          </Col>

          <Col className="col md-5">
            <h2 style={{ textAlign: "center" }}>GUEST</h2>
            <ul>
              <button type="button" class="btn btn-info">
                Enter the name of the Teams
              </button>
              <button type="button" class="btn btn-info">
                Enter the name of the Players
              </button>
              <button type="button" class="btn btn-info">
                Enter the name of the Coach
              </button>
            </ul>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "yellow",
            height: "50px ",
            alignContent: "center",
          }}
        >
          <Col>Home</Col>
          <Col>
            <button type="button" class="btn btn-info">
              Show the result
            </button>
          </Col>
          <Col>Guest</Col>
        </Row>

        <Row style={{ backgroundColor: "red", height: "50px " }}>
          <Col>
            <button>Enter the number</button>
          </Col>
          <Col>
            <button className="p">1</button>
            <button className="p">2</button>
            <button className="p">3</button>
          </Col>
          <Col>
            <button className="p">1</button>
            <button className="p">2</button>
            <button className="p">3</button>
          </Col>
          <Col>
            <button>Enter the number</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default basketball;
