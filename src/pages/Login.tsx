import { useState } from 'react'
import { IonButton, IonContent, IonImg, IonInput, IonPage, setupIonicReact } from "@ionic/react";
// import public assets
import imgLogo from "../assets/images/login_bg.jpg";
import Spacing from '../Widgets/Spacing';
setupIonicReact();

const Login: React.FC = () => {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")


   return (
      <IonPage>
         <IonContent style={{
         }}>
            <IonImg src={imgLogo} alt="img_logo" />
            <h2 className="text-center text-3xl mt-10 mb-10">Login Your Account</h2>
            <IonInput style={{
               width: "80%",
               margin: "0 auto"
            }} label="Username" labelPlacement="floating" fill="outline" placeholder="Enter your username"></IonInput>
            <Spacing marginBottom='20px' />

            <IonInput
               style={{
                  width: "80%",
                  margin: "0 auto"
               }}
               label="Password" labelPlacement="floating" fill="outline" placeholder="Enter your password"></IonInput>
            <Spacing marginBottom='20px' />

            <IonButton className='w-80' style={{
               marginLeft: "10%",
            }}>Sign In</IonButton>

         </IonContent>
      </IonPage >
   )
}

export default Login;
