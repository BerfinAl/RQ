import './App.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import SuperHeroes from './components/SuperHeroes';
import RQSuperHeroes from './components/RQSuperHeroes';

  const router =createBrowserRouter(
    createRoutesFromElements( 
      <>
      <Route index element={<Home />} path='/' />
      <Route  element={<SuperHeroes />} path='/superheroes' />
      <Route element={<RQSuperHeroes />} path='/rqsuperheroes' />
      </>
    ))

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
