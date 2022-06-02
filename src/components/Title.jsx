import main from '@styles/main.module.scss';

function Title(props) {
    return (
        <h1 className={main['title']}>
            {props.title}
        </h1>
    );
}

export default Title;