/* Components */
import Video from '@components/Video';
import TextDynamic from '@components/TextDynamic';
import Registrate from '@elements/Registrate';

/* Styles */
import main from '@styles/main.module.scss';
import Image from 'next/image';

/* Assets */
import splash from '@images/splash.png';
import event_cine from '@images/event_cine.png';
import cajaDeCineIcon from '@logos/logo_caja-de-cine.png';

function MainSection() {
    return (
        <section className={main['main_container']}>
            <figure className={main['figure_mainLogo']}>
                <Image
                    src={cajaDeCineIcon}
                    alt="Caja de cine Icon"
                    width={289 * .7}
                    height={234 * .7}
                    loading="lazy"
                    layout="intrinsic"
                />
            </figure>
            <figure className={main['figure_absolute']}>
                <Image
                    src={splash}
                    alt="Camara"
                    width={250 * 1.8}
                    height={260 * 1.8}
                    loading="lazy"
                    layout="intrinsic"
                />
            </figure>
            <div className={main['main_container-presentation']}>
                <h1>Festival <br /> Caja de Cine</h1>
                <h3>Cine desde las Regiones</h3>
                <p>
                    Tú puedes ser el protagonista que cuente la historia de tu región. <br /> Haz parte del cambio del arte, la cultura y la creatividad para un país en paz.
                </p>
                <div>
                    <span className='typed'>
                        Participa con tu familia y amigos
                    </span>
                    <TextDynamic />
                </div>
                <Registrate text={'Regístrate'} />
            </div>
            <Video />
            <figure className={main['figure_absolute2']}>
                <Image
                    src={event_cine}
                    alt="Camara"
                    width={280}
                    height={280}
                    loading="lazy"
                    layout="intrinsic"
                />
            </figure>
        </section>
    );
}

export default MainSection;
