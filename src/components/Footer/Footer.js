import home from "../../images/Home.png";
import ring from "../../images/Ring.png";
import rec from "../../images/Rec.png";
import personal from "../../images/Personal.png";
import homeIndicator from "../../images/HomeIndicator.png";
import { Col, Image, Row } from "antd";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <Row style={{ paddingTop: "8px" }}>
        <Col span={6} className="footer-item">
          <Image src={home}></Image>
        </Col>
        <Col span={6} className="footer-item">
          <Image src={ring}></Image>
        </Col>
        <Col span={6} className="footer-item">
          <Image src={rec}></Image>
        </Col>
        <Col span={6} className="footer-item">
          <Image src={personal}></Image>
        </Col>
      </Row>
      <div className="home-indicator">
        <Image src={homeIndicator}></Image>
      </div>
    </div>
  );
};
export default Footer;
