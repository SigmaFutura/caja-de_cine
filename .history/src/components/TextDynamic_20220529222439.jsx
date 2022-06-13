import {useRef, useEffect} from 'react';

function TextDynamic() {

    const thiss = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'de historias',
                'de iniciativas',
            ],
            typeSpeed: 150,
            backSpeed: 30,
            loop: true,
            cursorChar: '_',
            showCursor: true,
            smartBackspace: true,
        };
        
        // thissRef refers to the <span> rendered below
        typed.current = new Typed(thiss.current, options);
        
        return () => {
            /* Make sure to destroy Typed instance during cleanup
            to prevent memory leaks */
            typed.current.destroy();
        }
    }, []);

    return (
        <span className='typed' ref={thiss}>

        </span>
    );
}

export default TextDynamic;