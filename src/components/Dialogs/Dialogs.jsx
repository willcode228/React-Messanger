import '../Root.css';
import s from './Dialogs.module.css';

import Channel from './Channel/Channel';
import Friend from './Friend/Friend';
import Hgroup from './Hgroup/Hgroup';


function Dialogs(props) {

    let channels = props.state.Channels.map(el => <Channel text={el.title}/>),
        friends = props.state.Friends.map(el => <Friend data={el}/>);

    return (
        <div className={s.dialogs}>

            <Hgroup />

            <div className={s.channels}>
                <h3 className={s.title}>Channels</h3>
                {/* <Channel text="profile"/>
                <Channel text="gulp"/>
                <Channel text="js"/> */}
                {channels}
            </div>
            <div className={s.friends}>
                <h3 className={s.title}>Friends</h3>
                {/* <Friend data={data}/>
                <Friend data={data1}/>
                <Friend data={data2}/>
                <Friend data={data3}/> */ }
                {friends}
            </div>

        </div>
    );
}

export default Dialogs