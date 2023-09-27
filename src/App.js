import './App.css';
import { Buttons } from './Components/Buttons';
import { DisplayCompo } from './Components/DisplayCompo';
import { Hello } from './Components/Hello';


function App() {
  return (
   <div className='App'>
    <Hello/>
    <Buttons/>
    {/* <DisplayCompo/> */}

   </div>
  );
}

export default App;
