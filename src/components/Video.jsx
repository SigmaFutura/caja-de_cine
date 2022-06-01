/* styles */

import main from '@styles/main.module.scss';

function Video() {
    return (
        <figure>
            <iframe
                className={main['frame']} 
                title={false}
                src="https://player.vimeo.com/video/715001951?h=3f37c56bb1" 
                
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