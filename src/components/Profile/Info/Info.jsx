import '../../Root.css';
import s from './Info.module.css';

function Info(props) {
    return (
        <div className={s.info}>
            <h4 className={s.question}>{props.data.question}</h4>
            <p className={s.answer}>{props.data.answer}</p>
        </div>
    );
}

export default Info;