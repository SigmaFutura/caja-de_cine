import bannerConvocatoria from '@images/banner_convocatoria.jpg'

const Banner = () => {
    return (
        <section>
            <figure>
                <img 
                    src={bannerConvocatoria} 
                    alt="Camara"
                    width={280}
                    height={280}
                    loading="lazy"
                    layout="intrinsic"
                />
            </figure>
        </section>
    ) 
}

export default Banner;