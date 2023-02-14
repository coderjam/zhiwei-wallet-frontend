import {defineComponent} from "vue";
import {RouterView} from "vue-router"
import s from "./welcome.module.scss"
import logo from '../assets/icons/mangosteen.svg'

export const Welcome = defineComponent({
    setup() {
        return () => <div class={s.wrapper}>
            <header>
                <img src={logo}/>
            </header>
            <main><RouterView/></main>
            <footer>buttons</footer>
        </div>
    }
})