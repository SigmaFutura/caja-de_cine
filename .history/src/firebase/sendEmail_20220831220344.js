import {db} from './config';
import {setDoc, doc, Timestamp} from 'firebase/firestore';

const sendUserToDB = async (nombre, celular, email, ciudad, categoria, caja, otherCaja) => {
    try {
        await setDoc(doc(db, 'users_caja-cine', `${nombre}-${Math.random()}`), {
            nombre,
            celular,
            email,
            createdAt: Timestamp.now(new Date()),
            ciudad,
            categoria,
            caja,
            otherCaja
        })
        console.log('Usuario registrado en la base de datos')
    } catch (error) {
        console.error(error)
    }
}

export {sendUserToDB};