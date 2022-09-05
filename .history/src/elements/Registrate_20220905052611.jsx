import Link from "next/link";

/* Styles */
import main from '@styles/main.module.scss';

function Registrate({text}) {
    return (
        <Link href='https://forms.gle/jqzwpJ8Gb6FzfYiX7'>
            <a className={main['registrate']}>
                {text}
            </a>
        </Link>
    );
}

export default Registrate;