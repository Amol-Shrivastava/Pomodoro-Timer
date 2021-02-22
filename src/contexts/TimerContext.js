import React, { useState, createContext } from "react";

export const TimerContext = createContext();

export const TimerProvider = (props) => {
  const [timer, setTimer] = useState(25);
  const [longbreak, setLongBreak] = useState(60);

  return (
    <TimerContext.Provider value={[timer, longbreak, setTimer, setLongBreak]}>
      {props.children}
    </TimerContext.Provider>
  );
};
