/* Styles */
import main from '@styles/main.module.scss';

function Registrate({text}) {
    return (
        <a href='https://forms.gle/jqzwpJ8Gb6FzfYiX7' target='_blank' className={main['registrate']}>
            {text}
        </a>
    );
}

export default Registrate;