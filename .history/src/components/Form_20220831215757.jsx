import { useState, useEffect } from 'react';
import { sendUserToDB } from '@firebase/sendEmail';
import { useRouter } from 'next/router';

/* Components */
import Alert from '@elements/Alert';

/* Styles */
import main from '@styles/main.module.scss';

/* Api */
const url = '/api/cajas'

function Form() {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [postLoading, setPostLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [cajas, setCajas] = useState([]);
    const [user, setUser] = useState({
        nombre: '', 
        celular: undefined, 
        email: '', 
        ciudad: '', 
        cajaCompensacion: undefined,
        otherCaja: ''
    });
    
    const handleChange = ({target: {name, value}}) => {
        setUser({
            ...user, 
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPostLoading(!postLoading);
        setUser({...user})
        try {
            await sendUserToDB(user.nombre, user.celular, user.email, user.ciudad, user.cajaCompensacion, user.otherCaja);
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
                setTimeout(() => {
                    router.push('/');
                }, 300);
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const result = await fetch(url)
                const data = await result.json()
                const arrayCajas = data.data
                setLoading(false)
                return setCajas(arrayCajas)
            } catch (error) {
                console.log(error.message)
                setLoading(false)
            }
        }
        fetchData()
    }, []);

    return (
        <form 
            onSubmit={handleSubmit}
            className={main['formulario']}>
            <label htmlFor="nombre">Primer nombre y apellido*</label>
            <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                required
                value={user.nombre}
                placeholder='Digita tu nombre'
                onChange={handleChange}
                maxLength={24}
            />

            <label htmlFor="celular">N. Celular*</label>
            <input 
                type="tel" 
                name="celular" 
                id="celular" 
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                required
                value={user.celular}
                placeholder='Digita tu cel'
                onChange={handleChange}
            />

            <label htmlFor="email">Email*</label>
            <input 
                type="email"
                name="email" 
                id="email" 
                required
                value={user.email}
                placeholder='Digita tu email'
                onChange={handleChange}
            />

            <label htmlFor="ciudad">Ciudad*</label>
            <input 
                type="text" 
                name="ciudad" 
                id="ciudad" 
                required
                value={user.ciudad}
                placeholder='Ciudad de residencia'
                onChange={handleChange}
                maxLength={18}
            />

            <label htmlFor="categoria">Escoge una categoría*</label>
            <select 
                className={main['options']} 
                name="categoria" 
                id="categoria"
                value={user.categoria}
                onChange={handleChange}
            >
                <option>Ficción</option>
                <option>Documental</option>
                <option>Spot</option>
            </select>

            <label htmlFor="cajaCompensacion">Cajas de compensación*</label>
            <select 
                className={main['options']} 
                name="cajaCompensacion" 
                id="cajaCompensacion"
                value={user.cajaCompensacion}
                onChange={handleChange}
            >
                {
                    loading ?
                    <option 
                        value="cargando">Cargando...
                    </option> :
                    cajas.map(({id, nombre}) => {
                        return(
                            <option 
                                key={id} 
                            >
                                {nombre}
                            </option>
                        )
                    })
                }
            </select>
            <label htmlFor="otherCaja">Otra</label>
            <input 
                type="text" 
                name="otherCaja" 
                id="otherCaja" 
                value={user.otherCaja}
                placeholder='Caja de compensación'
                onChange={handleChange}
                maxLength={18}
            />
            <button type="submit">
                {
                    loading || postLoading ?
                    'Cargando...' :
                    'Enviar'
                }
            </button>
            {
                alert && 
                <Alert 
                    message={'Te has registrado, gracias por tu interés'}
                    style={'success_message'} 
                />
            }
        </form>
    );
}

export default Form;