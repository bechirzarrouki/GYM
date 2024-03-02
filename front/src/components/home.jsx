  import React from 'react'
  import Navbar from "./Navbar";
  import Header from "./Header";
  import Feature from "./Feature";
  import Offer from "./Offer";
  import About from "./About";
  import Contact from "./Contact";
  function Home() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Feature/>
        <Offer/>
        <About/>
        <Contact/>
      </div>
    )
  }

  export default Home;