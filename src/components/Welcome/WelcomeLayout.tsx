import {FunctionalComponent} from 'vue';
import s from './WelcomeLayout.module.scss';

export const WelcomeLayout: FunctionalComponent = (props, {slots}) => {
    const {icon, title, buttons} = slots
    return (
        <div class={s.wrapper}>
            <div class={s.card}>
                {icon?.()}
                {title?.()}
            </div>
            <div class={s.actions}>
                {buttons?.()}
            </div>
        </div>
    )
}