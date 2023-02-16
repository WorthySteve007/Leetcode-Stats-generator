import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Body() {
  const [val, setVal] = useState(1);
  const [res, setRes] = useState([]);
  const [user, setUser] = useState("");
  const change = (event) => {
    setUser(event.target.value);
  };
  function Fetch() {
    fetch(`https://leetcode-stats-api.herokuapp.com/${user}`)
      .then((response) => response.json())
      .then((data) => {
        // setArray(array => [...array, data])
        data.id = val;
        setVal(val + 1);
        data.username = user;

        setRes((res) => [...res, data]);
      })
      .catch((err) => {
        console.log("error found");
      });
  }

  return (
    <>
      <input type="text" onChange={change} />
      <button type="button" className="btn btn-outline-primary" onClick={Fetch}>
        Search
      </button>
      <br></br>
      <br></br>

      {res.map((user) => {
        return (
          <Card style={{ width: "30rem", height: "7rem" }}>
            <Card.Body>
              <Card.Title>{user.username}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Total Questions Solved : {user.totalSolved}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Easy Solved : {user.easySolved}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Medium Solved : {user.mediumSolved}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Hard Solved : {user.hardSolved}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
export default Body;
