import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme/useTheme";

export default function SidebarMenu() {
  const theme = useTheme();

  return (
    <Menu theme={theme}>
      <Menu.Item>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item>3rd Item</Menu.Item>
      <Menu.Item>4th Item</Menu.Item>
      <Menu.Item>
        <Link to="/login">Log out</Link>
      </Menu.Item>
    </Menu>
  );
}
