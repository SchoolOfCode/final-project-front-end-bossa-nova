import Hero from "../Hero";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Fetch from "../api/Fetch";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Hero />
      <Footer />
      <Fetch />
    </div>
  );
}

export default App;
