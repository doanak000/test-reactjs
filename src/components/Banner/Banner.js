import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import "./Banner.scss";
import line from "../../images/line.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-background">
        <div className="banner-black">
          <Button shape="circle" icon={<LeftOutlined />}></Button>
          <h2 style={{ color: "white" }}>Silver Tier</h2>
          <p style={{ color: "white" }}>
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </p>
        </div>
        <div className="banner-fee">
          <p style={{ color: "#B5B5BE", margin: "0" }}>
            Available Coin balance
          </p>
          <p
            style={{
              fontWeight: 600,
              fontSize: "-webkit-xxx-large",
              margin: "0",
            }}
          >
            340
          </p>
          <Image src={line}></Image>
          <p
            style={{
              color: "#B5B5BE",
              margin: "0",
              paddingTop: "5%",
              fontSize: "large",
            }}
          >
            You have paid rental fee for $1,200. Pay more $800 to achieve Gold
            Tier.
          </p>
          <a
            style={{
              display: "block",
              paddingTop: "5%",
              paddingBottom: "5%",
              fontSize: "16px",
            }}
          >
            View tier benefits <RightOutlined />
          </a>
          <Button
            style={{
              background: "#171725",
              color: "#ffffff",
              width: "100%",
              height: "60px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            My Coupons
          </Button>
          <p
            style={{
              color: "#B5B5BE",
              margin: "0",
              fontSize: "18px",
              paddingTop: "5%",
              textAlign: "center",
            }}
          >
            Updated:02/11/2001
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
