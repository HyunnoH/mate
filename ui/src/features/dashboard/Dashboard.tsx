import { v4 } from "uuid";
import { List, Typography } from "antd";
import PlatformCard from "./components/PlatformCard";

const mock = [
  {
    uuid: v4(),
    platform: "docker",
    address: "localhost",
    name: "local-docker",
    description: "",
  },
  {
    uuid: v4(),
    platform: "kubernetes",
    address: "127.0.0.1",
    name: "local-k8s",
    description: "",
  },
  {
    uuid: v4(),
    platform: "swarm",
    address: "172.17.0.1",
    name: "swarm",
    description: "",
  },
];

export default function Dashboard() {
  return (
    <section>
      <Typography.Title level={1}>Dashboard</Typography.Title>
      <List
        dataSource={mock}
        renderItem={(item) => (
          <List.Item>
            <PlatformCard {...item} />
          </List.Item>
        )}
      />
    </section>
  );
}
