import Image from 'next/image';

/* Components */
import Video from '@components/Video';
import TextDynamic from '@components/TextDynamic';
import Registrate from '@elements/Registrate';

/* Styles */
import main from '@styles/main.module.scss';

/* Assets */
import camara from '@images/camara.png';

function MainSection() {
    return (
        <section className={main['main_container']}>
            <div className={main['main_container-presentation']}>
                <figure>
                    <Image 
                        src={camara}
                        alt="Camara"
                        width={1920 / 2}
                        height={1080 / 2}
                        loading="lazy"
                        layout="intrinsic"
                    />
                </figure>
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
        </section>
    );
}

export default MainSection;