import { Redirect, Route } from 'react-router-dom';
import {
   IonApp,
   IonContent,
   IonIcon,
   IonLabel,
   IonRouterOutlet,
   IonTabBar,
   IonTabButton,
   IonTabs,
   setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// /* Theme variables */
// import './theme/variables.css';
import Login from './pages/Login';

setupIonicReact();

const getToken = window.localStorage.getItem("token")


const Main: React.FC = () => (
   <IonApp>
      <IonReactRouter >
         <IonRouterOutlet>
            <Route exact path="/home">
               <Tab1 />
            </Route>

            <Route exact path="/">
               {getToken === undefined ? <Redirect to="/login" /> : <Redirect to="/home" />}
            </Route>
            <Route path="/login">
               <Login />
            </Route>
         </IonRouterOutlet>
      </IonReactRouter>
   </IonApp>
);

export default Main;
