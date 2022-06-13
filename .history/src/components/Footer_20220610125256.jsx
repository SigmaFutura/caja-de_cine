import Image from 'next/image';

/* Styles */
import main from '@styles/main.module.scss';

/* Assets */
import fedecajaLogoFooter from '@assets/images/logo_fedecajasFooter.png';

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