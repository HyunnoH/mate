import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./features/login";

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={LoginPage}></Route>
    </BrowserRouter>
  );
}

export default App;
