import {defineComponent} from "vue";
import {RouterView} from "vue-router"

export const Welcome = defineComponent({
    setup() {
        return () => <>
            <header>logo</header>
            <main><RouterView/></main>
            <footer>buttons</footer>
        </>
    }
})