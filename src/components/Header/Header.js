import { Col, Row } from "antd";
import wifi from "../../images/Wifi.png";
import battery from "../../images/Battery.png";
import connection from "../../images/CellularConnection.png";
import "./Header.scss";

const Header = () => {
  return (
    <Row className="header">
      <Col
        span={12}
        style={{ textAlign: "left", color: "white", paddingLeft: "20px" }}
      >
        9:41
      </Col>
      <Col span={12} style={{ textAlign: "right", paddingRight: "20px" }}>
        <img src={battery} style={{ paddingRight: "5px" }}></img>
        <img src={wifi} style={{ paddingRight: "5px" }}></img>
        <img src={connection}></img>
      </Col>
    </Row>
  );
};

export default Header;
