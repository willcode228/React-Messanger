import '../Root.css';
import s from './Dialogs.module.css';

import Channel from './Channel/Channel';
import Friend from './Friend/Friend';
import Hgroup from './Hgroup/Hgroup';

import img from '../images/ava/Layer 10.png';
import img1 from '../images/ava/Layer 12.png';
import img2 from '../images/ava/Layer 13.png';
import img3 from '../images/ava/Layer 16.png';

function Dialogs() {

    let data = {
        name: 'Johny Spilberg',
        friendImg: img
    }
    let data1 = {
        name: 'Piter Doe',
        friendImg: img1
    }
    let data2 = {
        name: 'Bill Fold',
        friendImg: img2
    }
    let data3 = {
        name: 'Riana',
        friendImg: img3
    }

    return (
        <div className={s.dialogs}>

            <Hgroup />

            <div className={s.channels}>
                <h3 className={s.title}>Channels</h3>
                <Channel text="profile"/>
                <Channel text="gulp"/>
                <Channel text="js"/>
            </div>
            <div className={s.friends}>
                <h3 className={s.title}>Friends</h3>
                <Friend data={data}/>
                <Friend data={data1}/>
                <Friend data={data2}/>
                <Friend data={data3}/>
            </div>

        </div>
    );
}

export default Dialogs