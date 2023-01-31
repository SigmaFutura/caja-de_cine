/* Components */
import LinkImage from '@elements/LinkImage';

/* Styles */
import main from '@styles/main.module.scss';

/* Assets */
import fedecajaLogoFooter from '@logos/logo_fedecajasFooter.png';
import corpensarLogoFooter from '@logos/logo_corpensarFooter.png';

import logoInvictos from '@logos/logo_invictos.png';
import logoUpamplona from '@logos/logo_upamplona.png';
import logoMiccbo from '@logos/logo_miccbo.png';
import logoLaIsla from '@logos/logo_medioDia.png';
import logoCajamag from '@logos/cajamag_logo.png';

const invita = [
    {
        link: 'https://www.fedecajas.com/',
        logo: fedecajaLogoFooter,
        alt: 'Logo de la Federación de Cajas de Cine',
        width: 263,
        height: 59
    },
    {
        link: 'https://www.corpensar.com/',
        logo: corpensarLogoFooter,
        alt: 'Logo de Corpensar',
        width: 264,
        height: 59
    },

]

function Footer(props) {
    return (
        <footer className={main['footer_container']}>
            <div className={main['footer_content']}>
                <div className={main['footer_content-left']}>
                    <div className={main['footer_content-invita']}>
                        <h3>
                            Invita:
                        </h3>
                        <div>
                            {
                                invita.map((item, index) => {
                                    return (
                                        <LinkImage
                                            key={index}
                                            link={item.link}
                                            src={item.logo}
                                            alt={item.alt}
                                            width={item.width}
                                            height={item.height}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className={main['footer_content-info']}>
                    <p>© Copyright 2023 FEDECAJAS.</p>
                    <p>Todos los Derechos Reservados</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
