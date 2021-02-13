import '../../Root.css';
import s from './Input.module.css';
import attach from '../../images/icons/attach.svg';
import microphone from '../../images/icons/microphone.svg';

function Input() {
    return (
        <div className={s.input}>
            <button className={s.btn}><img src={attach} alt={'attach'}/></button>
            <button className={s.btn}><img src={microphone} alt={'microphone'}/></button>
            <textarea className={`${s.form}`} type="text" placeholder={'Your message here...'}/>
        </div>
    );
}

export default Input;