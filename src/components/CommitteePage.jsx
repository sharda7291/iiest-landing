import React from 'react'
import PageHeader from "./PageHeader";
import Header from './Header'
import Footer from './Footer'
import Committee from './Committee'

function CommitteePage() {
  return (
    <>
     <Header/>
     <PageHeader/>
     <div className='container m-4'>
     <Committee/></div>
     <Footer/></>

  )
}

export default CommitteePage