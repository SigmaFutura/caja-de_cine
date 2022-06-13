import Image from 'next/image';

/* Styles */
import main from '@styles/main.module.scss';

function Footer(props) {
    return (
        <footer className={main['footer_container']}>
            <div className={main['footer_content']}>
                <div className={main['footer_content_left']}>
                    <div>
                        <h3>
                            Invita:
                        </h3>
                        <Image 
                        
                        />
                    </div>
                </div>
                <div className={main['footer_content_right']}>

                </div>
            </div>
        </footer>
    );
}

export default Footer;