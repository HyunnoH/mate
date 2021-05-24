import "./ContentLayout.scss";
import { Layout } from "antd";
import { Route } from "react-router";
import Dashboard from "../../features/dashboard";
import ServerInfo from "../../features/server-info";

const { Content } = Layout;

export default function ContentLayout() {
  return (
    <Layout className="main-layout">
      <Content className="main-content">
        <Route path="/" exact component={Dashboard} />
        <Route path="/server/:id" component={ServerInfo} />
      </Content>
    </Layout>
  );
}
