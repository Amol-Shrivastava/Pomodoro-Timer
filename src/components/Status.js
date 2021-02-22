import React from "react";
import styled from "styled-components";

const Status = () => {
  //   const [background, setBackground] = useState("#151932");
  //   const [fontColor, setFontColor] = useState("#808394");
  //   const [active, setActive] = useState("pomodoro");

  return (
    <div>
      <Style_statusCont>
        <div className="status status_pom">pomodoro</div>

        <div className="status status_sbreak">short break</div>

        <div className="status status_lbreak">long break</div>
      </Style_statusCont>
    </div>
  );
};

const Style_statusCont = styled.div`
  max-width: 350px;
  height: 40px;
  border-radius: 70px;
  background-color: #151932;
  color: #808394;
  font-size: 0.65rem;
  margin: 0.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .status {
    flex: 0 1 calc(100% / 3);
    padding: 1rem 1.4rem;
  }
`;

export default Status;
