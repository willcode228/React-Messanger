import '../Root.css';
import s from './Profile.module.css';
import ava from '../images/profile/Rectangle 2.png';
import facebook from '../images/icons/facebook.svg';
import twitter from '../images/icons/twitter.svg';
import linkedIn from '../images/icons/linkedIn.svg';
import instagram from '../images/icons/instagram.svg';
import Icon from './Icon/Icon';
import Info from './Info/Info';

function Profile() {
    return (
        <div className={s.profile}>
            <div className={s.img__wrapper}>
                <img className="s.img" src={ava} alt="ava"/>
            </div>

            <div className={s.text__wrapper}>
                <h4 className={s.name}>Amilia Luna</h4>
                <h5 className={s.status}>UI Designer</h5>
                <ul className={s.social__icon__list}>
                    <Icon data={{img:facebook, alt:'facebook'}}/>
                    <Icon data={{img:linkedIn, alt:'linkedIn'}}/>
                    <Icon data={{img:twitter, alt:'twitter'}}/>
                    <Icon data={{img:instagram, alt:'instagram'}}/>
                </ul>
                <button className={s.btn}>Message</button> 
                <Info data={{question: 'Email', answer: 'crocus@gmail.com'}}/>
                <Info data={{question: 'Username', answer: 'crocus'}}/>
                <Info data={{question: 'Phone', answer: '0669538202'}}/>
                <Info data={{question: 'Skype', answer: 'amiluma'}}/>
            </div>

        </div>
    );
}

export default Profile