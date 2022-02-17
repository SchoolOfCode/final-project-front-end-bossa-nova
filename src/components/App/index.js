import Hero from "../Hero";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import UpdateForm from "../FormComponents/UpdateForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Hero />
      <UpdateForm />
      <Footer />
    </div>
  );
}

export default App;
