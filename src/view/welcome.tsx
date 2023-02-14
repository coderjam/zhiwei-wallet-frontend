import {defineComponent} from "vue";
import {RouterView} from "vue-router"
import s from "./welcome.module.scss"

export const Welcome = defineComponent({
    setup() {
        return () => <div class={s.wrapper}>
            <header>logo</header>
            <main><RouterView/></main>
            <footer>buttons</footer>
        </div>
    }
})