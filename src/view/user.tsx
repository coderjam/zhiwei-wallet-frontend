import {defineComponent} from "vue";

export const User = defineComponent({
    setup() {
        return () => <>
            <div>hi user</div>
            <button>1</button>
        </>
    }
})