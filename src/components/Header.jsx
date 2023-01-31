import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

/* Components */
import Limiter from "@containers/Limiter";
import Registrate from "@elements/Registrate";

/* Styles */
import main from '@styles/main.module.scss';

/* Assets */
import cajaDeCineIcon from '@logos/logo_caja-de-cine.png';
import fedecajaIcon from '@logos/logo_fedecajas.png';
import corpensarIcon from '@logos/logo_corpensar.png';

function Header(props) {
    const router = useRouter();
    return (
        <header className={main['container_header']}>
            <div className={main['container_header-info']}>
                <Limiter>
                    <p>Tel: +57 320 834 3890</p>
                    <p>| cajadecinefestival@gmail.com</p>
                </Limiter>
            </div>

        </header>
    );
}

export default Header;
