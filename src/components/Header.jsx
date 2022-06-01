import Image from "next/image";
import Link from "next/link";

/* Components */
import Limiter from "@containers/Limiter";
import Registrate from "@elements/Registrate";

/* Styles */
import main from '@styles/main.module.scss';

/* Assets */
import cajaDeCineIcon from '@logos/logo_caja-de-cine.png';
import corpensarIcon from '@logos/logo_corpensar.png';

function Header(props) {
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
                        <Image
                            src={cajaDeCineIcon}
                            alt="Logo caja de cine"
                            width={104}
                            height={89.3}
                            layout={'intrinsic'}
                            priority={true}
                            loading="eager"
                        />
                    </a>
                </Link>
                <div className={main['container_header-div']}>
                    <Registrate text={'Registrate'} />
                    <a href="https://www.corpensar.com/" target='_blank'>
                        <Image 
                            src={corpensarIcon}
                            alt="Logo corpensar"
                            width={180}
                            height={56}
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