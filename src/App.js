import './App.css';
import { Buttons } from './Components/Buttons';
import { DisplayCompo } from './Components/DisplayCompo';
import { Hello } from './Components/Hello';
import { Compo } from './Components/LifeCyclemethhod/Compo';
import DisplayComponent from './Components/StateProps/DisplayComponent';


function App() {
  return (
   <div className='App'>
    <Hello/>
    <Buttons/>
    {/* <DisplayCompo/> */}

    {/* <DisplayComponent/> */}
    {/* <Compo/> */}

   </div>
  );
}

export default App;
