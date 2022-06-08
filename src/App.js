import './App.css';
// import your arrays here
import { activities } from './activities-data.js';
import { crystals } from './crystal-data';
import ActivitiesList from './ActivitiesList.js';
import CrystalList from './CrystalList';
import './App.css';




function App() {
  return (
    <div className="App">
      <ActivitiesList activities={activities} />
      <hr />
      <CrystalList crystals={crystals} />
        
    </div>
  );
}

export default App;
