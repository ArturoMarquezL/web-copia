import Navbar from './components/Navbar'
import Benefits from './screens/Benefits'
import Contact from './screens/Contact'
import Home from './screens/Home'
import HowWeWork  from './screens/HowWeWork'
import Services from './screens/Services'



function App(){
  return <div>
    <Navbar/>
    <Home/>
    <Services/>
    <HowWeWork/>
    <Benefits/>
    <Contact/>
  </div>
}


export default App;
