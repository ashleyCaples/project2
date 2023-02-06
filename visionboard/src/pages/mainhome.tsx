import React from "react";
import "/src/App.css";

export const Home = () => {
  return (
    <>
      <div>This is the home page bitch</div>
      <div className="App">
        <div className="navbar">
          <ul>
            <li>
              <a className="active" href="#home">
                home
              </a>
            </li>
            <li>
              <a href="./locs">locs</a>
            </li>
            <li>
              <a href="./career">career</a>
            </li>
            <li>
              <a href="./skillhabit">skills & habits</a>
            </li>
            <li>
              <a href="./travel">travel</a>
            </li>
            <li>
              <a href="./aesthetics">aesthetics</a>
            </li>
            <li>
              <a href="./finances">finances</a>
            </li>
            <li>
              <a href="./fitnesshealth">fitness & health</a>
            </li>
          </ul>
        </div>
        <header>
          <div id="home">
            <h1>visionboard 2023</h1>
          </div>
        </header>
      </div>
    </>
  );
};
