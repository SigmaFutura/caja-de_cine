import Image from 'next/image';

/* Components */
import Video from '@components/Video';
import TextDynamic from '@components/TextDynamic';
import Registrate from '@elements/Registrate';

/* Styles */
import main from '@styles/main.module.scss';

/* Assets */
import splash from '@images/splash.png';
import camara from '@images/camara.png';

function MainSection() {
    return (
        <section className={main['main_container']}>
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
                <h3>Cine en las Regiones</h3>
                <p>
                    Buscando darle voz a las regiones por medio de
                </p>
                <div>
                    <span className='typed'>
                        historias e iniciativas
                    </span>
                    <TextDynamic />
                </div>
                <Registrate text={'Participar'} />
            </div>
            <Video />
            <figure className={main['figure_absolute']}>
                <Image 
                    src={camara}
                    alt="Camara"
                    width={1920}
                    height={1080}
                    loading="lazy"
                    layout="intrinsic"
                />
            </figure>
        </section>
    );
}

export default MainSection;