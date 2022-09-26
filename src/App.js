import "antd/dist/antd.min.css";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Rental from "./components/Rental/Rental";
import Petrol from "./components/Petrol/Petrol";
import FoodBaverage from "./components/FoodBevarage/FoodBaverage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Petrol></Petrol>
      <Rental></Rental>
      <FoodBaverage></FoodBaverage>
      <Footer></Footer>
    </div>
  );
}

export default App;
