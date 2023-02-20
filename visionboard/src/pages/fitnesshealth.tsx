import React from "react";
import FitnessImageList from "../components/Image List/fitnessImageList";

export const FitnessHealth = () => {
  return (
    <>
      <div id="fitnesshealth">

        <article>
          <h2>fitness & health</h2>
          <FitnessImageList/>
          <p>
            <ul className="goallist">
              <li>i will workout at least 4 to 5 days</li>
              <li>i will build back muscles</li>
              <li>i will tone my body</li>
              <li>i will try new and fun active things</li>
              <li>i will try pilates</li>
              <li>
                other things to try: rock climbing, calisthenics, yoga, orange
                theory, train for a marathon
              </li>
            </ul>
          </p>
        </article>
      </div>
    </>
  );
};
