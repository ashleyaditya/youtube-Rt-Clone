import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Suggestion from "./components/Suggestion";
import Card from "./components/Card";

function App() {
  const ytData = [
    {
      title: "3 custom property tricks to improve your CSS",
      name: "Keven Powell",
      img: "./images/kevin.png",
    },
    {
      title: "Relaxing Piano Music & Water Sounds 24/7",
      name: "OCB Relax Music",
      img: "./images/kevin.png",
    },
    {
      title: "Deep Focus Music To Improve Concentration ",
      name: "4k video Nature",
      img: "./images/kevin.png",
    },
    {
      title: "REAL Life House Tour (Minimalist Family)",
      name: "The Minimal Mom",
      img: "./images/kevin.png",
    },
    {
      title: "5 JavaScript Concepts You HAVE TO KNOW",
      name: "James Q Quick",
      img: "./images/kevin.png",
    },
    {
      title: "Fastest way to be a MASTER web dev???",
      name: "Kevin Powell",
      img: "./images/kevin.png",
    },
    {
      title: "How a 33 Piece Wardrobe gives you more Time, Money & Confidence!",
      name: "The Minimal Mom",
      img: "./images/kevin.png",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <div className="flex-container">
        <div>
          <Sidebar />
        </div>

        <div>
          <br></br>
          <Suggestion />
          <br></br>

          <div className="grid-container">
            {ytData.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                name={data.name}
                img={data.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
