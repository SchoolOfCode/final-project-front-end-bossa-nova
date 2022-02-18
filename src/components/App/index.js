import Hero from "../Hero";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Sidebar />
      <Hero />
      <Footer className={styles.Footer} />
    </div>
  );
}

export default App;
