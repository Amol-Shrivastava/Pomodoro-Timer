import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

//Styled Components
import styled from "styled-components";

const Incremental = () => {
  const [
    timer,
    setTimer,
    longbreak,
    setLongBreak,
    shrtBreak,
    setShrtBreak,
  ] = useContext(TimerContext);

  const incrementValue = (obj, setObj) => setObj(obj + 1);

  const decrementValue = (obj, setObj) =>
    obj > 0 ? setObj(obj - 1) : setObj(0);

  return (
    <StyleWrapper>
      <StyleButtons>
        <p className="heading">pomodoro</p>
        <StyleButtonBox>
          <span className="value">{timer}</span>
          <StyleButtonL onClick={() => incrementValue(timer, setTimer)}>
            <FontAwesomeIcon icon={faChevronUp} />
          </StyleButtonL>

          <StyleButtonR onClick={() => decrementValue(timer, setTimer)}>
            <FontAwesomeIcon icon={faChevronDown} />
          </StyleButtonR>
        </StyleButtonBox>
      </StyleButtons>

      <StyleButtons margin="give">
        <p className="heading">short break</p>
        <StyleButtonBox>
          <span className="value">{shrtBreak}</span>
          <StyleButtonL onClick={() => incrementValue(shrtBreak, setShrtBreak)}>
            <FontAwesomeIcon icon={faChevronUp} />
          </StyleButtonL>

          <StyleButtonR onClick={() => decrementValue(shrtBreak, setShrtBreak)}>
            <FontAwesomeIcon icon={faChevronDown} />
          </StyleButtonR>
        </StyleButtonBox>
      </StyleButtons>

      <StyleButtons>
        <p className="heading">long break</p>
        <StyleButtonBox>
          <span className="value">{longbreak}</span>
          <StyleButtonL onClick={() => incrementValue(longbreak, setLongBreak)}>
            <FontAwesomeIcon icon={faChevronUp} />
          </StyleButtonL>

          <StyleButtonR onClick={() => decrementValue(longbreak, setLongBreak)}>
            <FontAwesomeIcon icon={faChevronDown} />
          </StyleButtonR>
        </StyleButtonBox>
      </StyleButtons>
    </StyleWrapper>
  );
};

const StyleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleButtons = styled.div`
  margin: ${({ margin }) => (margin === "give" ? `0 .3rem` : 0)};
  .heading {
    text-align: left;
    color: #afafb3;
    font-weight: bold;
  }
`;

const StyleButtonBox = styled.button`
  width: 9.5rem;
  padding: 0.8rem 0.2rem;
  background-color: #e9eff0;
  border: 1px solid #e6e8ee;
  border-radius: 7px;
  position: relative;
  outline: none;
  margin-top: 0.3rem;
  &:focus {
    box-shadow: inset 0 2px 3px rgba(orange, 0.4);
  }

  .value {
    position: relative;
    left: -3.4rem;
    font-size: 0.8rem;
    color: #353535;
    font-weight: bold;
  }
`;

const StyleButton = styled.div`
  border: none;
  background: transparent;
  /* color: #d8dee2; */
  color: #c8cfd1;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  position: absolute;
  right: 0rem;
  padding: 0.2rem 0.4rem 0;
`;

const StyleButtonL = styled(StyleButton)`
  bottom: 1.4rem;
`;

const StyleButtonR = styled(StyleButton)`
  top: 1.2rem;
  padding-bottom: 0.2rem;
`;

export default Incremental;
