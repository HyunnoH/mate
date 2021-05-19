import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Theme, ThemeDispatch } from "./theme/useTheme";

function ReactApp() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <React.StrictMode>
      <Theme.Provider value={theme}>
        <ThemeDispatch.Provider value={setTheme}>
          <App />
        </ThemeDispatch.Provider>
      </Theme.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
