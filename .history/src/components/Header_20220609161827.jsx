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
                    <p>Tel: +57 316 017 8453</p>
                    <p>| marlonc.invictos@gmail.com</p>
                </Limiter>
            </div>
            <Limiter>
                <Link href="/">
                    <a>
                        <figure>
                            <Image
                                src={cajaDeCineIcon}
                                alt="Logo caja de cine"
                                width={286 / 2}
                                height={232 / 2}
                                layout={'responsive'}
                                priority={true}
                                loading="eager"
                            />
                        </figure>
                        <figure>
                            <Image
                                src={fedecajaIcon}
                                alt="Logo caja de cine"
                                width={94}
                                height={80}
                                layout={'responsive'}
                                priority={true}
                                loading="eager"
                                />
                        </figure>
                    </a>
                </Link>
                <div className={main['container_header-div']}>
                    {
                        router.pathname === '/' &&
                        <Registrate text={'Registrate'} />
                    }
                    <a href="https://www.corpensar.com/" target='_blank'>
                        <Image 
                            src={corpensarIcon}
                            alt="Logo corpensar"
                            width={180 / 1.2}
                            height={56 / 1.2}
                            layout="fixed"
                            priority={true}
                            loading="eager"
                        />
                    </a>
                </div>
            </Limiter>
        </header>
    );
}

export default Header;