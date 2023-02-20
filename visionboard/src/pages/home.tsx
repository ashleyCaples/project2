import React from "react";
import TemporaryDrawer from "../components/drawer";
import BasicModal from "../components/modal";
import "/src/App.css";

export const Home = () => {
  return (
    <>
      <div className="App">
        <header>
          <div id="home">
            <h1>visionboard 2023</h1>
          </div>
        </header>
        <body>
          <div className="home-square1">
            <p id="margin-quote-1">"put some inspirational quote here bitch"</p>
            <BasicModal />
          </div>
          <div className="container">
            <div className="homecards"> another flex item bitchhhhhhhh</div>
            <div className="homecards"> another flex item bitch</div>
            <div className="homecards"> another flex item bitch</div>
            <div className="homecards"> another flex item bitch</div>
          </div>
        </body>
      </div>
    </>
  );
};
