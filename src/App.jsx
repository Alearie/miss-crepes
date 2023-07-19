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
    </>
  );
}

export default App;
