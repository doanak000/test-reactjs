import CarouselItem from "../Carousel/CarouselItem";
import "./Rental.scss";

const fakeDataRentals = [
  {
    price: "20 Coins",
    describe: "Get $20 Rental rebate ",
  },
  {
    price: "15 Coins",
    describe: "Get $20 Rental rebate ",
  },
  {
    price: "15 Coins",
    describe: "Get $20 Rental rebate ",
  },
];
const Rental = () => {
  return (
    <div className="rental">
      <p className="title">Rental Rebate</p>
      <div className="rental-carousel" p>
        <CarouselItem data={fakeDataRentals}></CarouselItem>
      </div>
    </div>
  );
};
export default Rental;
