import CarouselItem from "../Carousel/CarouselItem";
import "./FoodBaverage.scss";

const fakeDataFoodBaverage = [
  {
    price: "20 Coins",
    describe: "NTUC Fairprice $50 Voucher",
  },
  {
    price: "15 Coins",
    describe: "NTUC Fairprice $50 Voucher ",
  },
  {
    price: "15 Coins",
    describe: "NTUC Fairprice $50 Voucher ",
  },
];
const FoodBaverage = () => {
  return (
    <div className="FoodBaverage">
      <p className="title">Food and Baverage</p>
      <div className="FoodBaverage-carousel" p>
        <CarouselItem data={fakeDataFoodBaverage}></CarouselItem>
      </div>
    </div>
  );
};
export default FoodBaverage;
