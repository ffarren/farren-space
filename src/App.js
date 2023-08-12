import "./App.css";
import TopNavigation from "./component/TopNavigation";
import Welcome from "./component/Welcome";
import MyWork from "./component/MyWork";
import AboutMe from "./component/AboutMe";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <TopNavigation />
      <Welcome />
      <MyWork />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
