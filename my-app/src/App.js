import './App.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home';
import SuperHeroes from './components/SuperHeroes';
import RQSuperHeroes from './components/RQSuperHeroes';
import SuperheroDetail from './components/SuperheroDetail';
import ParalelQueries from './components/ParalelQueries';
import DynamicParalelQueries from './components/DynamicParalelQueries';
import DependentQueries from './components/DependentQueries';

  const router =createBrowserRouter(
    createRoutesFromElements( 
      <Route element={<Layout />}>
      <Route index element={<Home />} path='/' />
      <Route  element={<ParalelQueries />} path='/paralelqueries' />
      <Route  element={<DynamicParalelQueries heroIDs={[1,3]} />} path='/dynamicparalelqueries' />
      <Route  element={<DependentQueries email="jane_doe@example.com" />} path='/dependentqueries' />
      <Route element={<RQSuperHeroes />} path='/rqsuperheroes' />
      <Route element={<SuperheroDetail />} path='/rqsuperheroes/:id' />
      </Route>
    ))

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
