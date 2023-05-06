import { useState } from 'react'
import { IonButton, IonContent, IonImg, IonInput, IonPage, IonText, IonToast, setupIonicReact } from "@ionic/react";
// import public assets
import imgLogo from "../assets/images/login_bg.jpg";
import Spacing from '../Widgets/Spacing';
import { useHistory } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
setupIonicReact();

const Login: React.FC = () => {
   const history = useHistory()
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")


   return (
      <IonReactRouter>
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
               <div className='text-center'>Dont Have Account?<span onClick={() => { }}>Sign Up</span></div>
               <Spacing marginBottom='20px' />

               <IonButton onClick={() => {
                  history.replace('/home')

               }} id="open-toast" className='w-80' style={{
                  marginLeft: "10%",
               }}>Sign In</IonButton>

               <IonToast trigger="open-toast" message="This toast will disappear after 5 seconds" duration={5000}></IonToast>
            </IonContent>
         </IonPage >
      </IonReactRouter>
   )
}

export default Login;
