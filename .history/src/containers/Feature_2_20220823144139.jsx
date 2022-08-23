import Image from 'next/image';

/* CSS */
import main from '@styles/main.module.scss'

/* Assets */
import spotIcon from '@icons/spot.png';
import docIcon from '@icons/documental.png';
import ficcionIcon from '@icons/ficcion.png';

function Feature_2() {

    const categorias = [
        {
            id: 1,
            title: 'Ficción',
            description: 'Cultura y territorio',
            tiempo: '1-5 minutos',
            image: ficcionIcon,
        },
        
    ]

    return (
        <section className={main['feature_2']}>
            <div>
                {
                    categorias.map((categoria, index) => {
                        return (
                            <div key={index}>
                                <Image 
                                    src={categoria.image}
                                    alt={categoria.title}
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    layout='intrinsic'
                                />
                                <h2>{categoria.title}</h2>
                                <p>{categoria.description}</p>
                                <p>{categoria.tiempo}</p>
                            </div>
                        )
                    })
                }
            </div>

            <p>
                Imágenes y sonidos desde las regiones de Colombia   
            </p>
        </section>
    );
}

export default Feature_2;