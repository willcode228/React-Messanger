import '../../Root.css';
import s from './Nav.module.css';

import search from '../../images/icons/search.svg';
import people from '../../images/icons/people.svg';
import tools from '../../images/icons/tools.svg';
import bell from '../../images/icons/bell.svg';

function Nav(props) {
    return (
        <div className={s.nav}>
            <h3 className={s.title}># general</h3>
            <div className={s.panel}>
                <div className={s.members}>
                    <img src={people} alt={'members'}/>
                    <p className={s.members__count}>1238</p>
                </div>
                <div className={s.search}>
                    <input className={`${s.search__input} main__input`} type="text" placeholder="Search..."/>
                    <button className={s.search__btn}><img src={search} alt={'search'}/></button>
                </div>
                <div className={s.settings}>
                    <button className={s.settings__item}><img src={bell} alt={'bell'}/></button>
                    <button className={s.settings__item}><img src={tools} alt={'tools'}/></button>
                </div>
            </div>
        </div>
    );
}

export default Nav