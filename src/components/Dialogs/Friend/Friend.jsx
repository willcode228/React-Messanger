import '../../Root.css'
import s from './Friend.module.css'
import { NavLink } from 'react-router-dom';

function Friend(props) {
    return (
        <NavLink className={s.friend} activeClassName={s.friend__active} to={`/${props.data.name}`}>
            <img className={s.img} src={props.data.friendImg} alt={'ava'}/>
            <h4 className={s.title}>{props.data.name}</h4>
            <span className={s.onlineIdentification}></span>
        </NavLink>
    );
}
export default Friend