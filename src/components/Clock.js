import React from "react";
import styled from "styled-components";

const Clock = () => {
  return (
    <Style_wrapperCont>
      <Style_containerSvg>
        <Style_outerCircle
          cx="150"
          cy="150"
          r="120"
          className="track"
        ></Style_outerCircle>
        <Style_innerCircle
          cx="150"
          cy="150"
          r="120"
          className="progress"
        ></Style_innerCircle>
      </Style_containerSvg>

      <Style_textCont>
        <Style_timeText>
          17 <Style_colon>:</Style_colon> 59
        </Style_timeText>
        <Style_pauseText>pause</Style_pauseText>
      </Style_textCont>
    </Style_wrapperCont>
  );
};
const Style_wrapperCont = styled.div`
  position: relative;
  /* border: 2px solid red; */
  margin-top: 2rem;
`;
const Style_containerSvg = styled.svg`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  padding-left: 0.1rem;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin: 1rem auto;
  position: relative;
  /* background: #eee; */
  box-shadow: -25px -20px 55px rgba(59, 70, 129, 0.5),
    10px 5px 45px rgba(0, 0, 0, 0.6);
`;

const Style_outerCircle = styled.circle`
  /* stroke: #444; */
  fill: none;
`;
const Style_innerCircle = styled.circle`
  stroke: #f87070;
  fill: #151932;
  stroke-width: 10px;
  stroke-dasharray: 700;
  stroke-linecap: round;
`;

const Style_textCont = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  place-items: center;
  flex-direction: column;
`;

const Style_timeText = styled.span`
  font-size: 4.3rem;
  color: #d7e0fe;
  font-weight: bold;
`;

const Style_pauseText = styled.span`
  text-transform: uppercase;
  letter-spacing: 7px;
  color: #c5cae8;
  font-size: 0.6rem;
  transform: translateY(1rem);
`;

const Style_colon = styled.span`
  font-size: 4.5rem;
  color: #d7e0fe;
  margin: 0 -20px;
`;

export default Clock;
