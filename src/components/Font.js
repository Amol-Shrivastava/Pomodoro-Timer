import React, { useState, useContext } from "react";
import styled from "styled-components";
import ThemeChildren from "../RadioStyle";

//context
import { FontContext } from "../contexts/FontContext";

//Styling
import {
  RadioStyle,
  RadioBtnStyle1,
  RadioBtnStyle2,
  RadioBtnStyle3,
} from "../RadioStyle";

const Font = () => {
  const [clicked, setClicked] = useState("first");
  const setFontValue = useContext(FontContext);

  const chooseFont = (font, fontType) => {
    setClicked(font);
    setFontValue(fontType);
  };

  return (
    <div>
      <RadioStyle>
        <div className="heading">
          <h2 className="font-head">Font</h2>
        </div>
        <ThemeChildren>
          <div className="radial_boxes">
            <RadioBtnStyle1
              htmlFor="fontMedium"
              clicked={clicked}
              onClick={() => chooseFont("first", "Roboto")}
            >
              <FontMed onClick={() => chooseFont("first", "Roboto")}>
                Aa
              </FontMed>

              <input type="radio" name="radio" id="fontMedium" />
            </RadioBtnStyle1>

            <RadioBtnStyle2
              clicked={clicked}
              htmlFor="fontlw"
              onClick={() => chooseFont("second", "Raleway")}
            >
              <FontLw onClick={() => chooseFont("second", "Raleway")}>
                Aa
              </FontLw>

              <input type="radio" name="radio" id="fontlw" />
            </RadioBtnStyle2>

            <RadioBtnStyle3
              clicked={clicked}
              htmlFor="fontstr"
              onClick={() => chooseFont("third", "Lobster")}
            >
              <FontStr onClick={() => chooseFont("third", "Lobster")}>
                Aa
              </FontStr>
            </RadioBtnStyle3>
          </div>
        </ThemeChildren>
      </RadioStyle>
    </div>
  );
};

const FontMed = styled.label`
  font-weight: ${({ theme }) => theme.fontmd.fontWeight};
`;

const FontLw = styled.label`
  font-weight: ${({ theme }) => theme.fontlw.fontWeight};
`;

const FontStr = styled.label`
  font-weight: ${({ theme }) => theme.fontstr.fontWeight};
`;

export default Font;
