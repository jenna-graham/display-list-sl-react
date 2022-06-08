import './App.css';
// import your arrays here
import { activities } from './activities-data.js';
import ActivitiesList from './ActivitiesList.js';


function App() {
  return (
    <div className="App">
      <ActivitiesList activities={activities} />
        
    </div>
  );
}

export default App;
