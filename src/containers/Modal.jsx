import {createPortal} from 'react-dom';
import { useState, useEffect } from 'react';

/* assets */
import closeIcon from '@icons/close.png';

const Modal = (props) => {
    const {children, modal, setModal, selector} = props 
    const [mounted, setMounted] = useState(false)
    const handleClick = () => {
        setModal(!modal)

        const portal = document.getElementById('portal')
        portal.classList.add('display-none')
    }

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false) 
    }, [selector])
    
    return createPortal(
        <div onClick={handleClick} className="modal">
            {children}
            <img onClick={handleClick} src={closeIcon} className="modal__close" alt="close" />
        </div>,

        document.getElementById('portal')
    ) 
}

export default Modal;