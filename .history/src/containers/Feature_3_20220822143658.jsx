import Image from 'next/image';

/* CSS */
import main from '@styles/main.module.scss'

/* Assets */
import eventIcon from '@images/event_cine.png';

/* Components */
import Registrate from '@elements/Registrate';

function Feature_3(props) {

    const etapas = [
        'Inscripciones: 22 de agosto 2022',
        'Seminarios, charlas y talleres',
        'Invitados nacionales e internacionales',
        'Muestra internacional de cine y grandes premios',
    ]

    return (
        <section className={main['feature_3']}>
            <div className={main['feature_3-title']}>
                <h2>
                    Etapas y fechas:
                    <span>
                        _
                    </span>
                </h2>
                {/* <figure>
                    <Image 
                        src={eventIcon}
                        alt="Etapas image"
                        width={300}
                        height={300}
                        loading="lazy"
                        layout='intrinsic'
                    /> 
                </figure> */}
            </div>
            <div className={main['feature_3-list']}>
                <ol>
                {
                    etapas.map((etapa, index) => {
                        return (
                            <li key={index}>
                                {etapa}
                            </li>
                        )
                    })
                }
                </ol>
            </div>
            <div className={main['feature_3-button']}>
                <Registrate text={'¡Quiero participar!'} />
            </div>
        </section>
    );
}

export default Feature_3;