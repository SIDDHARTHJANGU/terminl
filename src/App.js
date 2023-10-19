import "./App.css";
import Myheader from "./Components/Myheader";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Whatwedo from "./Components/Whatwedo";
import Modernization from "./Components/Modernization";
import Development from "./Components/Development";
import Application from "./Components/Application";
import Myfooter from "./Components/Myfooter";
function App() {
  return (
    <>
      <Myheader />
      <Whatwedo />
      <Modernization />
      <Development />
      <Application />
      <Myfooter />
    </>
  );
}

export default App;
