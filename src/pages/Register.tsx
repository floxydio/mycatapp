import { useState, useEffect } from 'react'
import { IonButton, IonContent, IonImg, IonInput, IonPage, setupIonicReact, IonList, IonSelectOption, IonItem, IonSelect } from "@ionic/react";
// import public assets
import imgLogo from "../assets/images/register_bg.jpg";
import Spacing from '../Widgets/Spacing';
import { KotaKabupaten } from '../models/KotaModel';
setupIonicReact();

const Register: React.FC = () => {
    const [datakota, setDataKota] = useState<KotaKabupaten[]>();
    // BUAT MODEL DULU SEBELUM BIKIN KABUPATEN
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {

        const getDataKota = async () => {
            await fetch("http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32")
                .then(res => {  
                    return res.json()
                })
                .then(data => {
                    console.log(`DATA KABUPATEN ${data.kota_kabupaten}`)
                    setDataKota(data.kota_kabupaten)
                })
        };
        getDataKota()
    }, [])

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
                        <IonSelect aria-label="kota" placeholder="Pilih kota">
                            {/* CARA MANGGILNYA KYK GINI, DIINGET BIAR GK LUPA */}
                            {datakota?.map((e) => (
                                <IonSelectOption key={e.id} value={e.nama}>{e.nama}</IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonItem>
                </IonList>

                <IonButton className='w-80' style={{
                    marginLeft: "10%",
                }}>Create Account</IonButton>
            </IonContent>
        </IonPage >
    );
}

export default Register;
