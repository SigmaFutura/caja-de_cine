import Image from "next/image";
import Link from "next/link";

function LinkImage(props) {
    const {link, src, alt, width, height} = props;
    return (
        <Link 
            href={link} 
            passHref >
            <a target='_blank'>
                <figure>
                    <Image 
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        loading="lazy"
                        layout='intrinsic'
                    />
                </figure>
            </a>
        </Link>
    );
}

export default LinkImage;