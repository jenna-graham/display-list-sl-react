import './App.css';
// import your arrays here
import { activities } from './activities-data.js';
import { crystals } from './crystal-data';
import { books } from './book-data.js';
import { kids } from './children-data.js';

import ActivitiesList from './ActivitiesList.js';
import CrystalList from './CrystalList';
import BookList from './BookList';
import ChildList from './ChildList.js';


function App() {
  return (
    <div className="App">
      <ActivitiesList activities={activities} />
      <hr />
      <CrystalList crystals={crystals} />
      <hr />
      <BookList books={books} />
      <hr />
      <ChildList kids={kids} />
    </div>
  );
}

export default App;
