import React, { useState, createContext } from "react";

export const FontContext = createContext();

export const onlyFontContext = createContext();

export const FontProvider = (props) => {
  const [fontValue, setFontValue] = useState("Roboto");

  return (
    <FontContext.Provider value={setFontValue}>
      <onlyFontContext.Provider value={fontValue}>
        {props.children}
      </onlyFontContext.Provider>
    </FontContext.Provider>
  );
};
