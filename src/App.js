import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Products from "./components/products/Products"
import Pricing from "./components/pricing/Pricing"
import Work from "./components/work/Work"
import Services from "./components/servic/Services"
import Contacts from "./components/contact/Contacts"
import Footer from "./components/footer/Footer"
import PageWrapper from "./PageWrapper"
import "bootstrap"
function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Header />
        <Intro />
        <About />
        <Products />
        <Pricing />
        <Work />
        <Services />
        <Contacts />
        <Footer />
      </PageWrapper>
      
    </div>
  );
}

export default App;
