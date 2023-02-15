import s from './Welcome.module.scss';
import cloud from '../../assets/icons/cloud.svg';
export const Fourth = () => (
    <div class={s.card}>
        <img class={s.icon} src={cloud} />
        <h2>每日提醒<br />不遗漏每一笔账单</h2>
    </div>
)

Fourth.displayName = 'Fourth'