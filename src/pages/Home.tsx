import { IonAvatar, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-align-items-center ion-justify-content-between">
            <IonCol>Dio Okta Rovelino</IonCol>
            <IonCol size='2'>
              <img src='https://randomuser.me/api/portraits/women/52.jpg' style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%"
              }} />

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
