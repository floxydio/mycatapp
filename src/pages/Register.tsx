import { useState } from 'react'
import { IonButton, IonContent, IonImg, IonInput, IonPage, setupIonicReact, IonList, IonSelectOption, IonItem, IonSelect } from "@ionic/react";
// import public assets
import imgLogo from "../assets/images/login_bg.jpg";
import Spacing from '../Widgets/Spacing';
setupIonicReact();

const Register: React.FC = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return (
        <IonPage>
            <IonContent style={{
            }}>
                <IonImg src={imgLogo} alt="img_logo" />
                <h2 className="text-center text-3xl mt-10 mb-10">Create Your Account</h2>
                <IonInput style={{
                    width: "80%",
                    margin: "0 auto"
                }} label="Name" labelPlacement="floating" fill="outline" placeholder="Enter your name"></IonInput>
                <Spacing marginBottom='20px' />

                <IonInput
                    style={{
                        width: "80%",
                        margin: "0 auto"
                    }}
                    label="Username" labelPlacement="floating" fill="outline" placeholder="Enter your username"></IonInput>
                <Spacing marginBottom='20px' />

                <IonInput
                    style={{
                        width: "80%",
                        margin: "0 auto"
                    }}
                    label="Password" labelPlacement="floating" fill="outline" placeholder="Enter your password"></IonInput>
                <Spacing marginBottom='20px' />

                <IonList>
                    <IonItem>
                        <IonSelect aria-label="fruit" placeholder="Select fruit">
                            <IonSelectOption value="apples">Apples</IonSelectOption>
                            <IonSelectOption value="oranges">Oranges</IonSelectOption>
                            <IonSelectOption value="bananas">Bananas</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>

                <IonButton className='w-80' style={{
                    marginLeft: "10%",
                }}>Sign In</IonButton>
            </IonContent>
        </IonPage >
    );
}

export default Register;
