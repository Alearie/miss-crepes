import "./App.css";

function App() {
  return (
    <>
      <nav>
        <img
          src="/src/assets/images/Details/logo.png"
          className="logo "
          alt="logo"
        />
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
            <img
              src="src/assets/images/C1.png"
              className="crepe-1"
              alt="Crepe1"
            />
            <img
              src="src/assets/images/C4.png"
              className="crepe-2"
              alt="Crepe4"
            />
            <img
              src="src/assets/images/C3.png"
              className="crepe-3"
              alt="Crepe3"
            />
          </div>
        </div>
      </div>

      <div id="Menu">
        <div className="menu-row">
          <div className="menu-column">
            <h1> Crepes </h1>

            <div className="menu-data">
              <div className="crepes">
                <img src="src/assets/images/C1.png" alt="crepe-1" />
                <p>
                  PEARL MILK TEA FILLED CREPE <br /> WITH CARAMEL SYRUP
                </p>
                <p>
                  Single: ₱69.00 <br /> Double: ₱129.00
                </p>
              </div>

              <div className="crepes">
                <img src="src/assets/images/C2.png" alt="crepe-2" />
                <p>
                  BANANA FILLED CREPE <br /> WITH CHOCOLATE SYRUP
                </p>
                <p>
                  Single: ₱69.00 <br /> Double: ₱129.00
                </p>
              </div>

              <div className="crepes">
                <img src="src/assets/images/C4.png" alt="crepe-4" />
                <p>
                  STRAWBERRY FILLED CREPE <br /> WITH CHOCOLATE SYRUP
                </p>
                <p>
                  Single: ₱89.00 <br /> Double: ₱169.00
                </p>
              </div>

              <div className="crepes">
                <img src="src/assets/images/C3.png" alt="crepe-3" />
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
            <img
              src="src/assets/images/Crepe Rolls/Mango-and-Cream-A.png"
              alt="mango-and-cream"
            />
            <p>MANGO AND CREAM </p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Strawberry-and-Cream.png"
              alt="strawberry-and-cream"
            />
            <p>STRAWBERRY AND CREAM</p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Chocolate.png"
              alt="chocolate"
            />
            <p>CHOCOLATE</p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/S_mores.png"
              alt="s'mores"
            />
            <p>SMORES</p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Banana-Nutella.png"
              alt="banana-nutella"
            />
            <p>BANANA NUTELLA</p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Strawberry-Nutella.png"
              alt="strawberry-nutella"
            />
            <p>STRAWBERRY NUTELLA</p>
          </div>
        </div>
      </div>

      <div className="menu-column">
        <h2> Premium | Box of 12 - Max of 4 Flavors for only ₱249.00 </h2>

        <div className="menu-data">
          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Coffee-Crumble.png"
              alt="coffee-crumble"
            />
            <p>COFFEE CRUMBLE </p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Matcha-A.png"
              alt="matcha"
            />
            <p>MATCHA</p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Rocky-Road.png"
              alt="rocky-road"
            />
            <p>ROCKY ROAD</p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Ube-Cheese.png"
              alt="ube-cheese"
            />
            <p>UBE AND CHEESE</p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Red-Velvet.png"
              alt="red-velvet"
            />
            <p>RED VELVET</p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Tiramisu.png"
              alt="tiramisu"
            />
            <p>TIRAMISU</p>
          </div>
        </div>
      </div>

      <div className="menu-column">
        <h2> Oreo Series | Box of 12 - All Oreo Flavors for only ₱249.00 </h2>

        <div className="menu-data">
          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Oreo-Vanilla.png"
              alt="oreo-vanilla"
            />
            <p>OREO VANILLA </p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Oreo-Strawberry.png"
              alt="oreo-strawberry"
            />
            <p>OREO STRAWBERRY </p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Oreo-Matcha.png"
              alt="oreo-matcha"
            />
            <p>OREO MATCHA </p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Oreo-Chocolate.png"
              alt="oreo-chocolate"
            />
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
            <img
              src="src/assets/images/Crepe Rolls/Mango-Creamcheese-B.png"
              alt="mango-creamcheese"
            />
            <p>MANGO CREAM CHEESE </p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Strawberry-Creamcheese.png"
              alt="strawberry-creamcheese"
            />
            <p>STRAWBERRY CREAM CHEESE </p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Blueberry-Creamcheese-B.png"
              alt="blueberry-creamcheese"
            />
            <p>BLUEBERRY CREAM CHEESE </p>
          </div>

          <div className="crepe-rolls">
            <img
              src="src/assets/images/Crepe Rolls/Oreo-Creamcheese.png"
              alt="oreo-creamcheese"
            />
            <p>OREO CREAM CHEESE </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
