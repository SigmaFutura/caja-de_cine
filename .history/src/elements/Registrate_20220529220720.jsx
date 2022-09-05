import Link from "next/link";

/* Styles */
import main from '@styles/main.module.scss';

function Registrate({text}) {
    return (
        <Link href='/registrate'>
            <a className={main['registrate']}>
                {text}
            </a>
        </Link>
    );
}

export default Registrate;