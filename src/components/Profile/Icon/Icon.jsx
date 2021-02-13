import '../../Root.css';
import s from './Icon.module.css';

function Icon(props) {
    return (
        <li className={s.icon__item}><img src={props.data.img} alt={props.data.alt}/></li>
    );
}
export default Icon;