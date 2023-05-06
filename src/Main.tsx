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
import { ellipse, square, triangle, person, home, chatbubble } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// /* Theme variables */
// import './theme/variables.css';
import Login from './pages/Login';
import Register from './pages/Register';

setupIonicReact();

const Main: React.FC = () => (
   <IonApp>
      <IonReactRouter >
         <IonRouterOutlet>
            <Route exact path="/home">
               <Tab1 />
            </Route>

            <Route exact path="/">
               <Redirect to="/login" />
            </Route>
            <Route path="/login">
               <Login />
            </Route>
         </IonRouterOutlet>
      </IonReactRouter>
   </IonApp>
);

export default Main;
