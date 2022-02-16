import Hero from "../Hero";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import CreateForm from "../FormComponents/CreateForm";
import UpdateForm from "../FormComponents/UpdateForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Hero />
      <CreateForm />
      <UpdateForm />
      <Footer />
    </div>
  );
}

export default App;
