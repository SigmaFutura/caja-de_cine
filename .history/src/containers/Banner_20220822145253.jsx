import bannerConvocatoria from '@images/banner_convocatoria.jpg'

const Banner = () => {
    return (
        <section>
            <figure>
                <img 
                    src={bannerConvocatoria} 
                    alt="Camara"
                    width={905}
                    height={357}
                    loading="lazy"
                    layout="responsive"
                />
            </figure>
        </section>
    ) 
}

export default Banner;