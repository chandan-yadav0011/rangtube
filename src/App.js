
import Header from './components/Header';
import Body from './components/Body';
import store from "./utils/store"
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import Sidebar from './components/Sidebar';
import VideoContainer from './components/VideoContainer';
import MainContainer from './components/MainContainer';



const appRouter = createBrowserRouter([
  {
  
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>

      },

      {
        path:"watch",
        element:<WatchPage/>
      }

    ]
  },

]);

function App() {

 
  return (

    <Provider store={store}>
 
        <Header/>

        <RouterProvider router={appRouter}/>
     
    </Provider>
  );
}

export default App;
