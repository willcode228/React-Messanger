import '../../Root.css'
import s from './Hgroup.module.css'
import settings from '../../images/icons/settings.svg'
import message from '../../images/icons/message.svg'

function Hgroup() {
    return (
        <div>
            <div className={s.title__hgroup}>
                <h2 className={s.title}>Nomad List</h2>
                <button>
                    <img src={settings} alt={'settings'} />
                </button>
            </div>
            <div className={s.subtitle__hgroup}>
                <img src={message} alt={'message'} />
                <h4 className={s.subtitle}>All treads</h4>
            </div>
        </div>
    );
}

export default Hgroup