import React, { useState, useContext } from "react";
import {
  RadioStyle,
  RadioCircle1,
  RadioCircle2,
  RadioCircle3,
} from "../RadioStyle";

import { ColorContext } from "../contexts/ColorContext";

import styled from "styled-components";
const Color = () => {
  const [clicked, setClicked] = useState("green");
  const setColorValue = useContext(ColorContext);

  const chooseColor = (color, colorCode) => {
    setClicked(color);
    setColorValue(colorCode);
  };

  return (
    <RadioStyle>
      <div className="heading">
        <h2 className="font-head">Color</h2>
      </div>

      <div className="radial_boxes">
        <RadioCircle1
          htmlFor="green"
          clicked={clicked}
          onClick={() => chooseColor("green", "#70f2f8")}
        >
          <span className="svg_check">
            {clicked === "green" ? (
              <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 11.522l1.578-1.626 7.734 4.619 13.335-12.526 1.353 1.354-14 18.646z" />
              </StyleSvg>
            ) : (
              ""
            )}
          </span>

          <input type="radio" name="radio" id="green" />
        </RadioCircle1>

        <RadioCircle2
          clicked={clicked}
          htmlFor="pink"
          onClick={() => chooseColor("pink", "#f87070")}
        >
          <span className="svg_check">
            {clicked === "pink" ? (
              <StyleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 11.522l1.578-1.626 7.734 4.619 13.335-12.526 1.353 1.354-14 18.646z" />
              </StyleSvg>
            ) : (
              ""
            )}
          </span>

          <input type="radio" name="radio" id="pink" />
        </RadioCircle2>

        <RadioCircle3
          clicked={clicked}
          htmlFor="orange"
          onClick={() => chooseColor("orange", "#d981f9")}
        >
          <span className="svg_check">
            {clicked === "orange" ? (
              <StyleSvg
                xmlns="http://www.w3.org/2000/StyleSvg"
                viewBox="0 0 24 24"
              >
                <path d="M0 11.522l1.578-1.626 7.734 4.619 13.335-12.526 1.353 1.354-14 18.646z" />
              </StyleSvg>
            ) : (
              ""
            )}
          </span>

          <input type="radio" name="radio" id="orange" />
        </RadioCircle3>
      </div>
    </RadioStyle>
  );
};

const StyleSvg = styled.svg`
  width: 12px;
  height: 12px;
  transition: all 0.4s ease;
  fill: #2e2e2e;
`;

export default Color;
