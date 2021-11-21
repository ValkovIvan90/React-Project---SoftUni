
import style from './Notification.module.css'

export default function Notification({ error }) {
    console.log(error);
    return (
        <div className={style.errors}>
            {error.map(x => <h4>{x}</h4>)}
        </div>
    )
}
