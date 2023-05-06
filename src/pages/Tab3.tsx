import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import Profile from '../components/Profile/Profile';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <Profile />
        {/* <ExploreContainer name="Tab 3 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
