import React from 'react'
import PageHeader from "./PageHeader";
import Header from './Header'
import Footer from './Footer'
import SchedulePage from './SchedulePage';

function ScheduleUrl() {
  return (
    <>
     <Header/>
     <PageHeader/>
     <div className='container m-4'>
     <SchedulePage/></div>
     <Footer/></>
  )
}

export default ScheduleUrl