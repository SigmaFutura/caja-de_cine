import Image from 'next/image';
import bannerConvocatoria from '@images/banner_convocatoria.jpg'

/* Styles */
import main from '@styles/main.module.scss';

const Banner = () => {
    return (
        <section className={main['banner_container']}>
            <figure>
                <Image
                    src={bannerConvocatoria} 
                    alt="Banner convocatoria"
                    width={905}
                    height={357}
                    loading="lazy"
                    layout="intrinsic"
                />
            </figure>
        </section>
    ) 
}

export default Banner;