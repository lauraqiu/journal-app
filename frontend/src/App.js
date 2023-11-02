import { Routes, Route } from 'react-router-dom';
import AddEntry from './pages/AddEntry.js';
import HomePage from './pages/Home.js'
import ViewEntries from './pages/ViewEntries.js';
import Entry from './pages/Entry.js';
import EditPage from './pages/EditPage.js'

function App() {
  return (
  <Routes>
    <Route path='/' element={ <HomePage />}/>
    <Route path='/addEntry' element={ <AddEntry />}/>
    <Route path='/viewEntries' element={ <ViewEntries />}/>
    <Route path='/viewEntries/:id' element={ <Entry/> } />
    <Route path='/editPage/:id' element={ <EditPage/> } />
  </Routes>
  );
}

export default App;

