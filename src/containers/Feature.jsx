import Image from 'next/image';

/* CSS */
import main from '@styles/main.module.scss'

/* Assets */
import participantesImage from '@images/participantes.jpg';

function Feature(props) {

    const participantes = [
        'Afiliados a las cajas de compensación  FEDECAJAS',
        'Funcionarios y trabajadores de las Cajas afiliadas',
        'Toda la comunidad de FEDECAJAS compuesta por todos los afiliados y beneficiarios a las cajas, sus comunidades regionales y nacionales'
    ]

    return (
        <section className={main['feature']}>
            <div className={main['feature-title']}>
                <h2>
                    Participantes:
                    <span>
                        _
                    </span>
                </h2>
                <figure>
                    <Image 
                        src={participantesImage}
                        alt="Participantes"
                        width={456 / 1.1}
                        height={336 / 1.1}
                        loading="lazy"
                        layout='responsive'
                    /> 
                </figure>
            </div>
            <div className={main['feature-list']}>
                <ol>
                {
                    participantes.map((participante, index) => {
                        return (
                            <li key={index}>
                                {participante}
                            </li>
                        )
                    })
                }
                </ol>
            </div>
        </section>
    );
}

export default Feature;