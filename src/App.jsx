import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Filter from './components/Filter'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <div><Header/></div>
    <div className="main">
        <Hero/>
        <Filter/>
        <Footer/>
      </div>
    </>
  )
}

export default App