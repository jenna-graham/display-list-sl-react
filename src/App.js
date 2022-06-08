import './App.css';
// import your arrays here
import { activities } from './activities-data.js';
import { crystals } from './crystal-data';
import { books } from './book-data.js';

import ActivitiesList from './ActivitiesList.js';
import CrystalList from './CrystalList';
import BookList from './BookList';

import './App.css';




function App() {
  return (
    <div className="App">
      <ActivitiesList activities={activities} />
      <hr />
      <CrystalList crystals={crystals} />
      <hr />
      <BookList books={books} />
        
    </div>
  );
}

export default App;
