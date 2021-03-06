import styled, { ThemeProvider } from "styled-components";

const Theme = {
  fontmd: {
    fontWeight: "500",
  },
  fontlw: {
    fontWeight: "400",
  },
  fontstr: {
    fontWeight: "700",
  },
};

const ThemeChildren = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export const RadioStyle = styled.div`
  padding: 1rem 2.2rem;
  display: grid;
  grid-template-columns: 25% 75%;
  justify-content: space-between;
  align-items: center;

  .font-head {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 0.7rem;
  }

  .radial_boxes {
    display: flex;
    justify-content: flex-end;
    height: 35px;
  }

  .radio_2 {
    margin: 0 0.8rem;
  }

  input {
    display: none;
  }

  label {
    cursor: pointer;
  }
`;

export const RadioBtnStyle = styled.div`
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  padding: 0.5rem;
  transition: all 0.4s ease;
`;

export const RadioBtnStyle1 = styled(RadioBtnStyle)`
  background-color: ${({ clicked }) =>
    clicked === "first" ? "#161a32" : "#eef1fa"};
  color: ${({ clicked }) => (clicked === "first" ? "#eef1fa" : "#151932")};
  width: ${({ clicked }) => (clicked === "first" ? "30px" : "28px")};
  height: ${({ clicked }) => (clicked === "first" ? "30px" : "28px")};
`;
export const RadioBtnStyle2 = styled(RadioBtnStyle)`
  background-color: ${({ clicked }) =>
    clicked === "second" ? "#161a32" : "#eef1fa"};
  color: ${({ clicked }) => (clicked === "second" ? "#edf0f8" : "#151932")};
  margin: 0 0.4rem;
  width: ${({ clicked }) => (clicked === "second" ? "30px" : "28px")};
  height: ${({ clicked }) => (clicked === "second" ? "30px" : "28px")};
`;
export const RadioBtnStyle3 = styled(RadioBtnStyle)`
  background-color: ${({ clicked }) =>
    clicked === "third" ? "#161a32" : "#eef1fa"};
  color: ${({ clicked }) => (clicked === "third" ? "#edf0f8" : "#151932")};
  width: ${({ clicked }) => (clicked === "third" ? "30px" : "28px")};
  height: ${({ clicked }) => (clicked === "third" ? "30px" : "28px")};
`;

export const RadioCircle1 = styled(RadioBtnStyle)`
  background-color: #70f2f8;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
export const RadioCircle2 = styled(RadioBtnStyle)`
  background-color: #f87070;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin: 0 0.4rem;
`;
export const RadioCircle3 = styled(RadioBtnStyle)`
  background-color: #d981f9;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

// export const RadioBtnStyle = styled.label`
//   label {
//     display: inline-block;
//     width: 27px;
//     height: 27px;
//     flex-direction: row;
//     border-radius: 50%;
//     border: 2px solid ${(props) => props.theme.bg};
//     margin: 0 1rem;
//     background: #edf0f8;

//     .text {
//       position: relative;
//       top: 5px;
//       font-weight: ${(props) => props.theme.fw};
//       color: ${(props) => props.theme.bg};
//     }
//   }

//   input {
//     display: none;
//   }
// `;

// const theme = {
//   fontmd: {
//     fw: "500",
//     bg: "yellow",
//   },

//   fontlw: {
//     fw: 400,
//     bg: "green",
//   },

//   fontdar: {
//     fw: "700",
//     bg: "blue",
//   },
// };

// export const ThemeChildren = ({ children }) => {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default ThemeChildren;
