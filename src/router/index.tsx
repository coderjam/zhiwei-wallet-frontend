import {createRouter, createWebHashHistory} from "vue-router";
import {routes} from "./routers.config";

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes
})

export default router