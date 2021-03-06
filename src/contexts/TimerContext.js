import React, { useState, createContext } from "react";

export const TimerContext = createContext();

export const onlyTimerContext = createContext();

export const TimerProvider = (props) => {
  const [timer, setTimer] = useState(25);
  const [shrtBreak, setShrtBreak] = useState(5);
  const [longbreak, setLongBreak] = useState(60);
  return (
    <TimerContext.Provider
      value={[
        timer,
        setTimer,
        longbreak,
        setLongBreak,
        shrtBreak,
        setShrtBreak,
      ]}
    >
      <onlyTimerContext.Provider value={[timer, longbreak, shrtBreak]}>
        {props.children}
      </onlyTimerContext.Provider>
    </TimerContext.Provider>
  );
};
