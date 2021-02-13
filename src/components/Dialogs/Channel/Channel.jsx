import '../../Root.css'
import s from './Channel.module.css'
import { NavLink } from 'react-router-dom';

function Channel(props) {
    return (
        <NavLink className={s.item} activeClassName={s.item__active} to={`/${props.text}`}># {props.text}</NavLink>
    );
}

export default Channel