import { Carousel } from "antd";
import ItemCard from "../Item/ItemCard";

const CarouselItem = (data) => {
  return (
    <Carousel autoplay>
      {data.data.map((Item) => (
        <ItemCard {...Item}></ItemCard>
      ))}
    </Carousel>
  );
};
export default CarouselItem;
