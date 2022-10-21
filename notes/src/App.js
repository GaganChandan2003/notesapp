
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Notes from './components/Notes';
import { RequiredAuth } from './hoc/RequiredAuth';
import AllNotes from './components/AllNotes';
import FullNote from './components/FullNote';
import EditNote from './components/EditNote';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/notes' element={<RequiredAuth><Notes /></RequiredAuth>}></Route>
      <Route path='/allnotes' element={<RequiredAuth><AllNotes /></RequiredAuth>}></Route>
      <Route path='/note/:id' element={<RequiredAuth><FullNote /></RequiredAuth>}></Route>
      <Route path='/edit/:id' element={<RequiredAuth><EditNote /></RequiredAuth>}></Route>
    </Routes>

  );
}

export default App;
