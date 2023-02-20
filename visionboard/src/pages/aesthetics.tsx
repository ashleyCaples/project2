import React from "react";
import AestheticImageList from "../components/Image List/aestheticImageList";
import QuiltedImageList from "../components/Image List/aestheticImageList";

export const Aesthetics = () => {
  return (
    <>
      <div id="aesthetics">
      <AestheticImageList />
        <article>
          <h2>aesthetics</h2>
          <h3>tattoos & piercing</h3>
          <p>
            <ul className="goallist">
              <li>i will start my sleeve of tattoos on my right arm</li>
              <li>i will get a tattoo dedicated to Omari</li>
              <li>i will re-pierce my ears and get new jewelry</li>
            </ul>
          </p>
          <h3>the closet</h3>
          <p>
            <ul className="goallist">
              <li>i will buy myself a NICE chain</li>
              <li>i will buy myself a NICE anklet </li>
            </ul>
          </p>
          <h3>hobbies</h3>
          <p>
            <ul className="goallist">
              <li>i will try wheel throwing</li>
              <li>other things to try: pottery, animation, 3D printing</li>
            </ul>
          </p>
        </article>
       
      </div>
    </>
  );
};
