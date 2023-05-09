import { useState } from 'react'
import { IonButton, IonContent, IonImg, IonInput, IonPage, IonText, IonToast, setupIonicReact } from "@ionic/react";
// import public assets
import imgLogo from "../assets/images/login_bg.jpg";
import Spacing from '../Widgets/Spacing';
import { useHistory } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import axios from "axios"
setupIonicReact();

const Login: React.FC = () => {
   const history = useHistory()
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")


   async function signIn() {
      let response = await axios.post("http://103.52.115.176:3000/v1/signin", {
         username: username,
         password: password
      })
      if (response.status == 200) {
         history.replace('/home')
         window.localStorage.setItem("token", response.data.token)
      } else if (response.status === 400) {
         alert("Username or Password is wrong")
      }

   }


   return (
      <IonReactRouter>
         <IonPage>
            <IonContent style={{
            }}>
               <img src={imgLogo} style={{
                  width: "100%",
                  height: "65vh",
                  objectFit: "cover"
               }}></img>
               <h2 className="text-center text-3xl mt-10 mb-10">Login Your Account</h2>
               <IonInput style={{
                  width: "80%",
                  margin: "0 auto"
               }} label="Username" labelPlacement="floating" fill="outline" placeholder="Enter your username" onIonChange={(e) => setUsername(e.target.value as string)}></IonInput>
               <Spacing marginBottom='20px' />

               <IonInput
                  style={{
                     width: "80%",
                     margin: "0 auto"
                  }}
                  label="Password" labelPlacement="floating" fill="outline" placeholder="Enter your password" onIonChange={(e) => setPassword(e.target.value as string)}></IonInput>
               <Spacing marginBottom='20px' />
               <div className='text-center'>Dont Have Account?<span onClick={() => {
                  history.push("/sign-up")
                }}>Sign Up</span></div>
               <Spacing marginBottom='20px' />

               <IonButton
                  shape='round'
                  property='fill'
                  onClick={signIn} style={{
                     width: "80%",
                     display: "flex",
                     margin: "0 auto"
                  }}>Sign In</IonButton>

               <Spacing marginBottom='20px' />

            </IonContent>
         </IonPage >
      </IonReactRouter>
   )
}

export default Login;
