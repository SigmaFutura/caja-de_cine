import Image from 'next/image';
import bannerConvocatoria from '@images/banner_convocatoria.jpg'

/* Styles */
import main from '@styles/main.module.scss';

/* Assets */
import splashAmarillo from '@images/splash-amarillo.png'

const Banner = () => {
    return (
        <section className={main['banner_container']}>
            <figure>
                <Image
                    src={splashAmarillo} 
                    alt="Banner convocatoria"
                    width={281 * 1.4}
                    height={249 * 1.4}
                    loading="lazy"
                    layout="intrinsic"
                />
            </figure>
            <figure>
                <Image
                    src={bannerConvocatoria} 
                    alt="Banner convocatoria"
                    width={905 * 1.2}
                    height={357 * 1.2}
                    loading="lazy"
                    layout="intrinsic"
                />
            </figure>
        </section>
    ) 
}

export default Banner;