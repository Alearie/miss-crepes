import "./App.css";
import logo from "./assets/images/Details/logo.png";
import C1 from "./assets/images/C1.png";
import C4 from "./assets/images/C4.png";
import C3 from "./assets/images/C3.png";
import C2 from "./assets/images/C2.png";
import MAC from "./assets/images/Crepe Rolls/Mango-and-Cream-A.png";
import SAC from "./assets/images/Crepe Rolls/Strawberry-and-Cream.png";
import C from "./assets/images/Crepe Rolls/Chocolate.png";
import S from "./assets/images/Crepe Rolls/S_mores.png";
import BN from "./assets/images/Crepe Rolls/Banana-Nutella.png";
import SN from "./assets/images/Crepe Rolls/Strawberry-Nutella.png";
import CC from "./assets/images/Crepe Rolls/Coffee-Crumble.png";
import M from "./assets/images/Crepe Rolls/Matcha-A.png";
import RR from "./assets/images/Crepe Rolls/Rocky-Road.png";
import UAC from "./assets/images/Crepe Rolls/Ube-Cheese.png";
import RV from "./assets/images/Crepe Rolls/Red-Velvet.png";
import T from "./assets/images/Crepe Rolls/Tiramisu.png";
import OV from "./assets/images/Crepe Rolls/Oreo-Vanilla.png";
import OS from "./assets/images/Crepe Rolls/Oreo-Strawberry.png";
import OM from "./assets/images/Crepe Rolls/Oreo-Matcha.png";
import OC from "./assets/images/Crepe Rolls/Oreo-Chocolate.png";
import MCC from "./assets/images/Crepe Rolls/Mango-Creamcheese-B.png";
import SCC from "./assets/images/Crepe Rolls/Strawberry-Creamcheese.png";
import BCC from "./assets/images/Crepe Rolls/Blueberry-Creamcheese-B.png";
import OCC from "./assets/images/Crepe Rolls/Oreo-Creamcheese.png";
import CEO from "./assets/images/marielle.png";

function App() {
  return (
    <>
      <nav>
        <img src={logo} className="logo " alt="logo" />
        <ul>
          <li>
            <a href="#Home"> Home </a>
          </li>
          <li>
            <a href="#Menu"> Menu </a>
          </li>
          <li>
            <a href="#About"> About </a>
          </li>
          <li>
            <a href="#Contact"> Contact </a>
          </li>
        </ul>
      </nav>

      <div id="Home">
        <div className="container-home">
          <div className="home-text">
            <h1> We create delicious memories </h1>
            <p>
              Offering a variety of crepe products passionately made from <br />
              the finest ingredients
            </p>
            <a href="#Menu"> Explore more </a>
          </div>
          <div className="home-crepes">
            <img src={C1} className="crepe-1" alt="Crepe1" />
            <img src={C4} className="crepe-2" alt="Crepe4" />
            <img src={C3} className="crepe-3" alt="Crepe3" />
          </div>
        </div>
      </div>

      <div id="Menu">
        <div className="menu-row">
          <div className="menu-column">
            <h1> Crepes </h1>

            <div className="menu-data">
              <div className="crepes">
                <img src={C1} alt="crepe-1" />
                <p>
                  PEARL MILK TEA FILLED CREPE <br /> WITH CARAMEL SYRUP
                </p>
                <p>
                  Single: ₱69.00 <br /> Double: ₱129.00
                </p>
              </div>

              <div className="crepes">
                <img src={C2} alt="crepe-2" />
                <p>
                  BANANA FILLED CREPE <br /> WITH CHOCOLATE SYRUP
                </p>
                <p>
                  Single: ₱69.00 <br /> Double: ₱129.00
                </p>
              </div>

              <div className="crepes">
                <img src={C4} alt="crepe-4" />
                <p>
                  STRAWBERRY FILLED CREPE <br /> WITH CHOCOLATE SYRUP
                </p>
                <p>
                  Single: ₱89.00 <br /> Double: ₱169.00
                </p>
              </div>

              <div className="crepes">
                <img src={C3} alt="crepe-3" />
                <p>
                  MANGO FILLED CREPE <br /> WITH CHOCOLATE SYRUP
                </p>
                <p>
                  Single: ₱79.00 <br /> Double: ₱149.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-column">
        <h1> Crepe Rolls </h1>
        <h2> Classic | Box of 12 - Max of 4 Flavors for only ₱229.00 </h2>

        <div className="menu-data">
          <div className="crepe-rolls">
            <img src={MAC} alt="mango-and-cream" />
            <p>MANGO AND CREAM </p>
          </div>

          <div className="crepe-rolls">
            <img src={SAC} alt="strawberry-and-cream" />
            <p>STRAWBERRY AND CREAM</p>
          </div>

          <div className="crepe-rolls">
            <img src={C} alt="chocolate" />
            <p>CHOCOLATE</p>
          </div>

          <div className="crepe-rolls">
            <img src={S} alt="s'mores" />
            <p>SMORES</p>
          </div>

          <div className="crepe-rolls">
            <img src={BN} alt="banana-nutella" />
            <p>BANANA NUTELLA</p>
          </div>

          <div className="crepe-rolls">
            <img src={SN} alt="strawberry-nutella" />
            <p>STRAWBERRY NUTELLA</p>
          </div>
        </div>
      </div>

      <div className="menu-column">
        <h2> Premium | Box of 12 - Max of 4 Flavors for only ₱249.00 </h2>

        <div className="menu-data">
          <div className="crepe-rolls">
            <img src={CC} alt="coffee-crumble" />
            <p>COFFEE CRUMBLE </p>
          </div>

          <div className="crepe-rolls">
            <img src={M} alt="matcha" />
            <p>MATCHA</p>
          </div>

          <div className="crepe-rolls">
            <img src={RR} alt="rocky-road" />
            <p>ROCKY ROAD</p>
          </div>

          <div className="crepe-rolls">
            <img src={UAC} alt="ube-cheese" />
            <p>UBE AND CHEESE</p>
          </div>

          <div className="crepe-rolls">
            <img src={RV} alt="red-velvet" />
            <p>RED VELVET</p>
          </div>

          <div className="crepe-rolls">
            <img src={T} alt="tiramisu" />
            <p>TIRAMISU</p>
          </div>
        </div>
      </div>

      <div className="menu-column">
        <h2> Oreo Series | Box of 12 - All Oreo Flavors for only ₱249.00 </h2>

        <div className="menu-data">
          <div className="crepe-rolls">
            <img src={OV} alt="oreo-vanilla" />
            <p>OREO VANILLA </p>
          </div>

          <div className="crepe-rolls">
            <img src={OS} alt="oreo-strawberry" />
            <p>OREO STRAWBERRY </p>
          </div>

          <div className="crepe-rolls">
            <img src={OM} alt="oreo-matcha" />
            <p>OREO MATCHA </p>
          </div>

          <div className="crepe-rolls">
            <img src={OC} alt="oreo-chocolate" />
            <p>OREO CHOCOLATE </p>
          </div>
        </div>
      </div>

      <div className="menu-column">
        <h2>
          {" "}
          Cream Cheese Series | Box of 12 - All Cream Cheese Flavors for only
          ₱259.00{" "}
        </h2>

        <div className="menu-data">
          <div className="crepe-rolls">
            <img src={MCC} alt="mango-creamcheese" />
            <p>MANGO CREAM CHEESE </p>
          </div>

          <div className="crepe-rolls">
            <img src={SCC} alt="strawberry-creamcheese" />
            <p>STRAWBERRY CREAM CHEESE </p>
          </div>

          <div className="crepe-rolls">
            <img src={BCC} alt="blueberry-creamcheese" />
            <p>BLUEBERRY CREAM CHEESE </p>
          </div>

          <div className="crepe-rolls">
            <img src={OCC} alt="oreo-creamcheese" />
            <p>OREO CREAM CHEESE </p>
          </div>
        </div>
      </div>

      <div id="About">
        <div className="about">
          <div className="about-text">
            <h1> About Us </h1>
            <p>
              Welcome to our crepe business, where we specialize in creating
              delicious and unique crepes using only the freshest and highest
              quality ingredients. Our crepes are carefully crafted to satisfy
              all tastes and preferences, with a wide range of flavors
              available. Our crepe provides a quick and delicious snack for
              anyone on the go. We pride ourselves on providing excellent
              customer service and ensuring that every customer has a positive
              experience. We invite you to come and experience the unique and
              delicious crepes that our business has to offer.
            </p>
          </div>

          <div className="about-pic">
            <img src={CEO} alt="marielle" />
            <h3> Marielle </h3>
            <h4> Owner of Miss Crepes</h4>
          </div>
        </div>
      </div>
      <div id="Contact">
        <div className="container-contact">
          <div className="contact">
            <a
              href="https://www.facebook.com/misscrepes2020"
              rel="noreferrer"
              target="_blank"
              className="fa fa-facebook"
            ></a>
            <a
              href="https://www.instagram.com/misscrepes2020/"
              rel="noreferrer"
              target="_blank"
              className="fa fa-instagram"
            ></a>
            <h1> &copy;2020 | MISS CREPES</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
