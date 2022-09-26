import CarouselItem from "../Carousel/CarouselItem";
import "./Petrol.scss";

const fakeDataPetrols = [
  {
    price: "20 Coins",
    describe: " 50% discount for every $100 top-up on your Shell Petrol Card ",
  },
  {
    price: "15 Coins",
    describe: " 50% discount for every $100 top-up on your Shell Petrol Card ",
  },
  {
    price: "10 Coins",
    describe: " 50% discount for every $100 top-up on your Shell Petrol Card ",
  },
];
const Petrol = () => {
  return (
    <div className="petrol">
      <p className="title">Petrol</p>
      <div className="petrol-carousel" p>
        <CarouselItem data={fakeDataPetrols}></CarouselItem>
      </div>
    </div>
  );
};
export default Petrol;
