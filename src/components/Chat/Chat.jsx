import '../Root.css'
import s from './Chat.module.css'
import Input from './Input/Input'
import Nav from './Nav/Nav'

function Chat() {
    return (
        <div className={s.chat}>
            <Nav />
            <Input />
        </div>
    );
}

export default Chat