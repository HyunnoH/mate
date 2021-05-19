import { Layout } from "antd";
import { Route } from "react-router";
import Dashboard from "../../features/dashboard";
import SidebarMenu from "../../features/side-bar";
import { useTheme } from "../../theme/useTheme";

const { Sider, Content } = Layout;

export default function SidebarLayout() {
  const theme = useTheme();

  return (
    <Layout>
      <Sider
        theme={theme}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div>Harbor</div>
        <SidebarMenu />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Content>
          <Route path="/" exact component={Dashboard} />
        </Content>
      </Layout>
    </Layout>
  );
}
