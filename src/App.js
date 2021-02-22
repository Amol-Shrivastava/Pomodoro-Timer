import React, { useState } from "react";

import Clock from "./components/Clock";
import Settings from "./components/Settings";
import Status from "./components/Status";
//Styled-components
import { GlobalStyle } from "./GlobalStyles";
import styled from "styled-components";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [toggleBtn, setToggleBtn] = useState(false);

  return (
    <Style_Wrappercont>
      <GlobalStyle />
      <Style_heading>pomodoro</Style_heading>
      <Status />
      <Clock />
      <Style_icon>
        <FontAwesomeIcon
          icon={faCog}
          className="settings"
          onClick={() => setToggleBtn(!toggleBtn)}
        />
      </Style_icon>
      {toggleBtn ? <Settings /> : ""}
    </Style_Wrappercont>
  );
}

const Style_Wrappercont = styled.div`
  position: relative;
  top: 2.5rem;
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
