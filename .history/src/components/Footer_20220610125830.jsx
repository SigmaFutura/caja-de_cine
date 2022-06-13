import Image from 'next/image';

/* Styles */
import main from '@styles/main.module.scss';

/* Assets */
import fedecajaLogoFooter from '@logos/logo_fedecajasFooter.png';
import corpensarLogoFooter from '@logos/logo_corpensarFooter.png';

function Footer(props) {
    return (
        <footer className={main['footer_container']}>
            <div className={main['footer_content']}>
                <div className={main['footer_content_left']}>
                    <div>
                        <h3>
                            Invita:
                        </h3>
                        <figure>
                            <Image 
                                src={fedecajaLogoFooter}
                                alt="Logo de la Federación de Cajas de Cine"
                                width={150}
                                height={150}
                                loading="lazy"
                                layout='intrinsic'
                            />
                        </figure>
                    </div>
                </div>
                <div className={main['footer_content_right']}>

                </div>
            </div>
        </footer>
    );
}

export default Footer;