import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import DogsPage from "./Pages/DogsPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/dogs" component={DogsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
