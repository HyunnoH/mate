import "./ContentLayout.scss";
import { Layout } from "antd";
import { Route } from "react-router";
import Dashboard from "../../features/dashboard";

const { Content } = Layout;

export default function ContentLayout() {
  return (
    <Layout className="main-layout">
      <Content className="main-content">
        <Route path="/" exact component={Dashboard} />
      </Content>
    </Layout>
  );
}
