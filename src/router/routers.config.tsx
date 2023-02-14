import {RouteRecordRaw} from "vue-router";
import {Welcome} from "../view/welcome";
import {First} from "../components/Welcome/First";
import {Second} from "../components/Welcome/Second";
import {Third} from "../components/Welcome/Third";
import {Fourth} from "../components/Welcome/Fourth";
import {User} from "../view/user";

export const routes:Array<RouteRecordRaw> = [
    { path: '/', redirect: '/welcome/1' },
    {
        path:'/Welcome',
        component: Welcome,
        children:[
            {path:'', redirect:'/welcome/1'},
            {path:'1', component:First},
            {path:'2', component:Second},
            {path:'3', component:Third},
            {path:'4', component:Fourth},
        ]
    },
    { path: '/user', component: User },
]