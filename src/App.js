import logo from './logo.svg';
import './App.css';
import TopBar from './component/TopBar';
import Navbar from './component/Navbar';
import HeroBanner from './component/HeroBanner';
import CardSection from './component/CardSection';
import Footer from './component/Footer';
import AboutUs from './component/About';
import Contactus from './component/Contactus';
import VisionMissionValues from './component/VisionMissionValues';

function App() {
  return (
<>
{/* <TopBar/> */}
<Navbar/>
<HeroBanner/>
{/* <CardSection/> */}
<AboutUs/>
<VisionMissionValues/>
<Contactus/>
<Footer/>
</>
  );
}

export default App;
