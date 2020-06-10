import React from "react";
import "./basketball.css";
import { Row, Col } from "reactstrap";

const BasketScoreBoard = () => {
  return (
    <div>
      (
      <container style={{ display: "flex", height: "auto" }}>
        <Row
          style={{
            display: "flex",
            textAlign: "center",
            alignContent: "center",

            height: "350px ",
            justifyContent: "space-around",
          }}
        >
          <Col style={{ fontSize: "2em", textAlign: "center" }}>
            <Row>
              <h5> HOME</h5>
            </Row>
            <Row>
              <input
                placeholder
                style={{
                  fontSize: "1.5em",
                  textAlign: "center",
                  color: "red",
                  height: "auto",
                  width: "50%",
                  borderRightStyle: "solid",
                  margin: "10px",
                }}
                value="0"
              ></input>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                height: "150px",
                alignContent: "center",
              }}
            >
              <Col style={{ margin: "15px" }}>
                <h4>FOULS</h4>

                <h4>TOL</h4>
                <h4>Bonus</h4>
              </Col>
              <Col>
                <Row
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <input
                    placeholder
                    style={{
                      fontSize: ".9em",
                      textAlign: "center",
                      color: "yellow",
                      width: "2em",

                      justifyContent: "space-around",
                    }}
                    value="00"
                  ></input>
                </Row>
                <Row
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <input
                    placeholder
                    style={{
                      fontSize: ".9em",
                      textAlign: "center",
                      color: "yellow",
                      width: "2em",
                      margin: "10px",
                      justifyContent: "space-around",
                    }}
                    value="0"
                  ></input>
                </Row>
                <Row
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <input
                    placeholder
                    style={{
                      fontSize: "0.9em",
                      textAlign: "center",
                      color: "yellow",
                      width: "2em",

                      justifyContent: "space-around",
                    }}
                    value="4"
                  ></input>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <input
                placeholder
                style={{
                  fontSize: "6em",
                  textAlign: "center",
                  color: "yellow",
                  textAlign: "center",
                  justifyContent: "space-around",
                  width: "60%",
                }}
                value="00:00"
              ></input>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "10px auto",
              }}
            >
              <Col style={{ display: "flex", justifyContent: "space-between" }}>
                <h2> PERIOD</h2>
                <input
                  placeholder
                  style={{
                    fontSize: "2em",
                    textAlign: "center",
                    color: "white",
                    width: "1.5em",
                    height: "1.5em",
                  }}
                  value="0"
                ></input>
              </Col>
              <Col>
                <input
                  placeholder
                  style={{
                    fontSize: "2em",
                    textAlign: "center",
                    color: "white",
                    textAlign: "center",

                    width: "4em",
                    height: "1.5em",
                  }}
                  value="00:00"
                ></input>
              </Col>
            </Row>
            <Row>
              <Row style={{ display: "flex", justifyContent: "space-around" }}>
                <h2>PLAYER</h2>
                <h2>POINTS</h2>
              </Row>
              <Row style={{ display: "flex", justifyContent: "space-around" }}>
                <input
                  placeholder
                  style={{
                    fontSize: "2em",
                    textAlign: "center",
                    color: "yellow",
                    width: "5em",
                    height: "2em",
                    justifyContent: "space-around",
                  }}
                  value="0"
                ></input>
                <input
                  placeholder
                  style={{
                    fontSize: "2em",
                    textAlign: "center",
                    color: "yellow",
                    width: "5em",
                    height: "2em",
                  }}
                  value="0"
                ></input>
              </Row>
            </Row>
          </Col>
          <Col style={{ fontSize: "2em", textAlign: "center" }}>
            <Row>
              <h4> GUEST</h4>
            </Row>
            <Row>
              <input
                placeholder
                style={{
                  fontSize: "2em",
                  textAlign: "center",
                  color: "red",
                  height: "auto",
                  width: "50%",
                  borderRightStyle: "solid",
                  margin: "10px",
                }}
                value="0"
              ></input>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                height: "150px",
                alignContent: "center",
              }}
            >
              <Col style={{ margin: "10px" }}>
                <h4>FOULS</h4>
                <h4>TOL</h4>
                <h4>Bonus</h4>
              </Col>
              <Col>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    height: "auto",
                  }}
                >
                  <input
                    placeholder
                    style={{
                      fontSize: ".9em",
                      textAlign: "center",
                      color: "yellow",
                      width: "2em",

                      justifyContent: "space-around",
                    }}
                    value="00"
                  ></input>
                </Row>
                <Row
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <input
                    placeholder
                    style={{
                      fontSize: ".9em",
                      textAlign: "center",
                      color: "yellow",
                      width: "2em",
                      margin: "5px",
                      justifyContent: "space-around",
                    }}
                    value="0"
                  ></input>
                </Row>
                <Row
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <input
                    placeholder
                    style={{
                      fontSize: ".9em",
                      textAlign: "center",
                      color: "yellow",
                      width: "2em",

                      justifyContent: "space-around",
                    }}
                    value="4"
                  ></input>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </container>
    </div>
  );
};

export default BasketScoreBoard;
