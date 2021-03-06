import React, { useState, createContext } from "react";

export const ColorContext = createContext();

export const onlyColorContext = createContext();

export const ColorProvider = (props) => {
  const [colorValue, setColorValue] = useState("#f87070");

  return (
    <ColorContext.Provider value={setColorValue}>
      <onlyColorContext.Provider value={colorValue}>
        {props.children}
      </onlyColorContext.Provider>
    </ColorContext.Provider>
  );
};
