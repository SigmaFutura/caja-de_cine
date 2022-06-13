/* Styles */
import main from '@styles/main.module.scss'

function Whatsapp(props) {
    return (
        <a 
            href="https://api.whatsapp.com/send?phone=573160178453&text=Hola! 
            Quisiera mas información sobre el festival caja de cine... "
            className={main['whatsapp__float']} 
            target="_blank"
        >
            <i 
                class="fa fa-whatsapp my-float"
            >
            </i>
        </a>
    );
}

export default Whatsapp;