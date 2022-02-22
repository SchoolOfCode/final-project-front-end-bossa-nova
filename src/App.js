import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./components/Hero";

import GlobalStyle from "./GlobalStyle";
import Layout from "./components/layout/Layout.js";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Layout>
        <Hero />
      </Layout>
    </Router>
  );
}

export default App;
