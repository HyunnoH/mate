import "./SidebarLayout.scss";
import { Layout, Menu } from "antd";

import { Link } from "react-router-dom";
import SidebarMenu from "../../features/side-bar";
import { useTheme } from "../../theme/useTheme";
import ContentLayout from "../content/ContentLayout";

const { Sider } = Layout;

export default function SidebarLayout() {
  const theme = useTheme();

  return (
    <Layout>
      <Sider theme={theme} className="sidebar-layout">
        <div>
          <div>Harbor</div>
          <SidebarMenu />
        </div>
        <Menu theme={theme}>
          <Menu.Item>
            <Link to="/login">Log out</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <ContentLayout />
    </Layout>
  );
}
