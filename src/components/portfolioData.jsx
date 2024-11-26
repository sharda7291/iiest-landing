import About from '../components/About'
import Registration from '../components/Registration'
import Panel from '../components/Panel'
import Speakers from './Speakers';
import Committee from './Committee';
import SchedulePage from './SchedulePage';
import AboutIns from './AboutIns';
import AboutDep from './AboutDep';
const portfolioData = [
  
  {
    id: 1,
    title: "ABOUT THE INSTITUTE",
    subtitle: "The Department of Electrical Engineering, IIEST Shibpur",
    category: "About the Institute",
    description:(
      <>
      <AboutIns/>
      </>
    )
      
  },

    {
      id: 2,
      title: "ABOUT THE DEPARTMENT",
      subtitle: "Indian Institute of Engineering Science and Technology, Shibpur",
      category: "About the Department",
      description:(
        <>
        <AboutDep/>
        </>
      )
        
    },
    
    {
      id: 3,
      title: "ABOUT THE DEPARTMENT",
      subtitle: "Registration Fees",
      category: "Registration Fees",
      description: (
       <Registration/>
      ),
    },
    {
      id: 4,
      title: "Our Panelist",
      subtitle: "",
      category: "Our Panelist",
      description: (<><Panel/></>)
    },
    {
      id: 5,
      title: "AI Program Schedule",
      subtitle: "",
      category: "Schedules",
      description: (<SchedulePage/>),
    },
    
    {
      id: 6,
      title: "Committees",
      subtitle: "",
      category: "Committees",
      description: (<Committee/>)
    },
    {
      id: 8,
      title: "Our Speakers",
      subtitle: "",
      category: "speaker",
      description: (<><Speakers/></>)
    },
  ];
  
  export default portfolioData;
  