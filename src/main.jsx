import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FirebaseContextProvider from './Firebase/FirebaseContext.jsx'
import {FirebaseContext} from './Firebase/FirebaseContext.jsx'
import { firebaseApp} from '../src/util/FirebaseConfic.jsx'



createRoot(document.getElementById('root')).render(


  <BrowserRouter>
       <FirebaseContext.Provider value={{firebase:firebaseApp}}>
        <FirebaseContextProvider>
            <App />
        </FirebaseContextProvider>
      </FirebaseContext.Provider>
      
  </BrowserRouter>


)
