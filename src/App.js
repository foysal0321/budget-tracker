import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';

import store from './redux/store/Store';
import { router } from './routes/Routes';


function App() {
 
  return (
    <div className=" ">
    <Provider store={store}>  
       <RouterProvider router={router} />
    </Provider>

    </div>
  );
}

export default App;
