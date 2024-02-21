import Navbar from "./components/Navbar/navbar";
import Homepage from "./components/Homepage/homepage";
import Sec from "./components/Sec/sec";
import Event from "./components/Event/event";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Timeline from "./components/Timeline/timeline";
import Streak from "./components/Streak/streak";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Homepage/>
     <Streak/>
     <About/>
     <Sec/>
     <Event/>
     <Timeline/>
     <Footer/>
    </div>
  );
}

export default App;
