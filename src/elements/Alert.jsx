import main from '@styles/main.module.scss';

function Alert(props) {
    const {message, style} = props
    return (
        <div className={main[style]}>
            <p>{message}</p>
        </div>
    );
}

export default Alert;