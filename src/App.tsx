import {defineComponent} from "vue";
import {RouterView} from "vue-router"
import "./styles/app.scss"

export const App = defineComponent({
    setup() {
        return () => (
            <div class="page">
                <RouterView/>
            </div>
        )
    }
})