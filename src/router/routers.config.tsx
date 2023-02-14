import {Home} from "../view/home";
import {About} from "../view/about";
import {RouteRecordRaw} from "vue-router";

export const routes:Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]
