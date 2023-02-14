import {defineComponent} from "vue";
import { RouterView } from "vue-router"

export const App = defineComponent({
    setup() {
        return () => <>
            <header>导航</header>
            <RouterView />
            <footer>页脚</footer>
        </>
    }
})