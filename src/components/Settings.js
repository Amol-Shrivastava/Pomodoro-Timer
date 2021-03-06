import React, { useContext } from "react";
import Incremental from "./Incremental";
import styled from "styled-components";

import { onlyFontContext } from "../contexts/FontContext";
import { onlyColorContext } from "../contexts/ColorContext";

//Components
import Font from "../components/Font";
import Color from "../components/Color";

//FontAwesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Settings = ({ settogglebtn, togglebtn }) => {
  const fontValue = useContext(onlyFontContext);
  const colorValue = useContext(onlyColorContext);

  const closeModal = () => {
    settogglebtn(!togglebtn);
  };

  return (
    <>
      <Style_Wrapper>
        <Style_Modal fontType={fontValue}>
          <Style_Heading>
            <h1 className="settings">Settings</h1>
            <div className="icon-box" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </Style_Heading>

          <Style_border></Style_border>

          <Style_TimeRange>
            <div className="time-heading">Time (Minutes)</div>

            <Style_numberInput>
              <Incremental />
            </Style_numberInput>
          </Style_TimeRange>

          <Style_border></Style_border>
          <Font />
          <Color />

          <StyleButton
            onClick={() => settogglebtn(false)}
            colorType={colorValue}
          >
            Apply
          </StyleButton>
        </Style_Modal>
      </Style_Wrapper>
    </>
  );
};

const Style_Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.55);
  transition: background ease 3s;
`;

const Style_Modal = styled.div`
  width: 550px;
  max-width: 100%;
  height: 420px;
  border-radius: 18px;
  padding: 1.7rem 0;
  background: #fff;
  font-family: ${({ fontType }) => (fontType ? fontType : "sans-serif")};

  /* transition: height ease 0.3s; */
`;

const Style_Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  .settings {
    color: #1c1d33;
    font-weight: bolder;
    /* color: yellow; */
  }

  .icon-box {
    color: #bdbcbf;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      color: #97969b;
    }
  }
`;

const Style_border = styled.div`
  margin: 1.4rem 0;
  border-bottom: 1px solid #f0f0f0;
`;

const Style_TimeRange = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem;
  /* border: 2px solid blue; */
  width: 100%;
  .time-heading {
    /* border: 2px solid brown; */
    text-align: left;
    margin-bottom: 1rem;

    text-transform: uppercase;
    letter-spacing: 4px;
    color: #2f2f38;
    font-weight: bold;
    font-size: 0.7rem;
  }
`;

const Style_numberInput = styled.div`
  margin-top: 0.5rem;
`;

const StyleButton = styled.button`
  position: relative;
  z-index: 5;
  top: 0.6rem;
  border: none;
  padding: 0.6rem 1.5rem;
  background-color: ${({ colorType }) => (colorType ? colorType : "#f87070")};
  color: white;
  border-radius: 40px;
  cursor: pointer;
`;
export default Settings;
