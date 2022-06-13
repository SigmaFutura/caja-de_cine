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
    }
]

const apoya = [
    {
        logo: logoInvictos,
        link: 'https://invictos.com.co/',
        alt: 'Logo de Invictos',
        width: 247,
        height: 75
    },
    {
        logo: logoUpamplona,
        link: 'https://www.unipamplona.edu.co/',
        alt: 'Logo de U. Pamplona',
        width: 247 / 3.8,
        height: 260 /  3.8
    },
    {
        logo: logoMiccbo,
        link: 'https://www.facebook.com/miccbo.muestrainternacionaldecine',
        alt: 'Logo de Miccbo',
        width: 457 / 3,
        height: 141 /  3
    },
    {
        logo: logoLaIsla,
        link: '/',
        alt: 'Logo La Isla Mediodia',
        width: 324 / 2,
        height: 92 /  2
    }
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
                <div className={main['footer_content_right']}>
                    <div className={main['footer_content-apoya']}>
                        <h3>
                            Apoya:
                        </h3>
                        <div>
                            {
                                apoya.map((item, index) => {
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
                    <p>© Copyright 2016 FEDECAJAS.</p>
                    <p>Todos los Derechos Reservados</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;