import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';


import HomePage from './Pages/HomePage';
import CountryPage from './Pages/CountryPage';
import About from './Pages/About';
import ContactPage from './Pages/ContactPage';
import AppLayOut from './Components/LayOut/AppLayOut';
import ErrorPage from './Pages/ErrorPage';
import CountryDetails from './Components/LayOut/CountryDetails';


const router=createBrowserRouter([

  {
    path:'/',
    element:<AppLayOut/>,
    errorElement:<ErrorPage/>,
    children:
    [
      {
        path:'/',
        element:<HomePage/>,
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'country',
        element:<CountryPage/>,
      },
      {
        path:'country/:id',
        element:<CountryDetails/>,
      },
      {
        path:'contact',
        element:<ContactPage/>,
      }
    ]
  },  
]);

function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
