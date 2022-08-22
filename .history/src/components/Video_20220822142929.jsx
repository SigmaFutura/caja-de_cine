/* styles */

import main from '@styles/main.module.scss';

function Video() {
    return (
        <figure className={main['video']}>
            <iframe
                className={main['video_iframe']} 
                title={false}
                src="https://www.youtube.com/embed/PznmSKFD6J4" 
                autoplay
                muted
                frameBorder="0" 
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-presentation"
            />
        </figure>
    );
}

/* 
<ReactPlayer 
    url='https://vimeo.com/715001951'
    width="720px"
    height="480px"
    controls={true}
    playing={false}
    loop={false}
/> */

export default Video;