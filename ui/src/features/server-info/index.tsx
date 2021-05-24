import { Route, RouteChildrenProps, Switch } from "react-router";
import Overview from "./ServerOverview";

export default function ServerInfo({ match }: RouteChildrenProps) {
  return (
    <Switch>
      <Route path={match?.path} exact component={Overview} />
    </Switch>
  );
}
