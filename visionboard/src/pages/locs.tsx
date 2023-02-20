import React from "react";
import LocsImageList from "../components/Image List/locsImageList";

export const Locs = () => {
  return (
    <>
      <div id="locs">
        <article>
          <h2>locs</h2>
          <LocsImageList/>
          <p>
            <ul className="goallist">
              <li>i want happy healthy locs</li>
              <li>first year loc'd</li>
            </ul>
          </p>
        </article>
      </div>
    </>
  );
};
