import React from 'react'
import PageHeader from "./PageHeader";
import Header from './Header'
import Footer from './Footer'
import Registration from './Registration';

function RegistraPage() {
  return (
    <>
     <Header/>
     <PageHeader/>
     <div className='container m-4'>
     <Registration/></div>
     <Footer/>
    </>
  )
}

export default RegistraPage