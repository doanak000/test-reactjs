import { Image } from "antd";
import petrolImage1 from "../../images/petrol1.png";
import "./Item.scss";

const ItemCard = (data) => {
  return (
    <div className="item">
      <Image src={petrolImage1}></Image>
      <p className="item-price">{data.price}</p>
      <p className="item-describe">{data.describe}</p>
    </div>
  );
};
export default ItemCard;
