import "./PlatformCard.scss";
import { Platform } from "../../types";
import { Link } from "react-router-dom";
import { Space } from "antd";

export default function PlatformCard({
  uuid,
  address,
  description,
  platform,
  name,
}: Platform) {
  return (
    <div className="platform-card">
      <Link to={`/server/${uuid}`}>
        <section>
          <Space>
            <img
              src={"" || `${process.env.PUBLIC_URL}/images/cargo-ship.png`}
              alt=""
              className="platform-card__image"
            />
            <span>{address}</span>
          </Space>
        </section>
      </Link>
    </div>
  );
}
