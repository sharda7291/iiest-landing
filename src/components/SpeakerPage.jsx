import React from 'react'
import Speakers from './Speakers';
import PageHeader from "./PageHeader";
import Header from './Header'
import Footer from './Footer'

function SpeakerPage() {
  return (
    <>
     <Header/>
     <PageHeader/>
     <div className='container m-4'>
     <Speakers/></div>
     <Footer/></>
  )
}

export default SpeakerPage