import React, { useState, useContext } from "react";

import Clock from "./components/Clock";
import Settings from "./components/Settings";
import Status from "./components/Status";
import { TimerProvider } from "./contexts/TimerContext";

import { onlyFontContext } from "./contexts/FontContext";

//Styled-components
import { GlobalStyle } from "./GlobalStyles";
import styled from "styled-components";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/fontawesome-svg-core";

import { faCog } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [togglebtn, settogglebtn] = useState(false);
  const fontValue = useContext(onlyFontContext);

  return (
    <TimerProvider>
      <Style_Wrappercont fontType={fontValue}>
        <GlobalStyle />
        <Style_heading>pomodoro</Style_heading>
        <Status />
        <Clock />
        <Style_icon>
          <FontAwesomeIcon
            icon={faCog}
            className="settings"
            onClick={() => settogglebtn(!togglebtn)}
          />
        </Style_icon>
        {togglebtn ? (
          <Settings settogglebtn={settogglebtn} togglebtn={togglebtn} />
        ) : (
          ""
        )}
      </Style_Wrappercont>
    </TimerProvider>
  );
}

const Style_Wrappercont = styled.div`
  position: relative;
  top: 2.5rem;
  font-family: ${({ fontType }) => (fontType ? fontType : `sans-serif`)};
`;

const Style_heading = styled.h1`
  font-weight: bold;
  margin: 2rem 0 3rem;
  color: #d4dbf9;
`;

const Style_icon = styled.div`
  position: relative;
  top: 3rem;

  .settings {
    font-size: 1.5rem;
    color: #d4dbf9;
    cursor: pointer;
  }
`;

export default App;
