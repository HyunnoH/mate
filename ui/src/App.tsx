import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SidebarLayout from "./layouts/side-bar";
import LoginPage from "./features/login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage}></Route>
        <SidebarLayout />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
